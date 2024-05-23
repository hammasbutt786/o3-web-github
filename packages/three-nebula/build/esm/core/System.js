import EventDispatcher, { EMITTER_ADDED, EMITTER_REMOVED, SYSTEM_UPDATE, SYSTEM_UPDATE_AFTER } from '../events';
import { DEFAULT_SYSTEM_DELTA } from './constants';
import Emitter from '../emitter/Emitter';
import { INTEGRATION_TYPE_EULER } from '../math/constants';
import { POOL_MAX } from '../constants';
import Pool from './Pool';
import fromJSON from './fromJSON';
import fromJSONAsync from './fromJSONAsync';
import { CORE_TYPE_SYSTEM as type } from './types';
/**
 * The core of the three-system particle engine.
 * A System instance can contain multiple emitters, each with their own initializers
 * and behaviours.
 *
 */

export default class System {
  /**
   * Constructs a System instance.
   *
   * @param {object} THREE - ThreeJs
   * @param {number} [preParticles=POOL_MAX] - The number of particles to start with
   * @param {string} [integrationType=INTEGRATION_TYPE_EULER] - The integration type to use
   * @return void
   */
  constructor(preParticles = POOL_MAX, integrationType = INTEGRATION_TYPE_EULER) {
    /**
     * @desc The class type.
     * @type {string}
     */
    this.type = type;
    /**
     * @desc Determines if the system can update or not. Set to false when destroying
     * to ensure that external calls to update do not throw errors.
     * @type {boolean}
     */

    this.canUpdate = true;
    /**
     * @desc The number of particles to start with.
     * @type {number}
     */

    this.preParticles = preParticles;
    /**
     * @desc The integration algorithm type to use.
     * @param {string}
     */

    this.integrationType = integrationType;
    /**
     * @desc The emitters in the particle system.
     * @type {array<Emitter>}
     */

    this.emitters = [];
    /**
     * @desc The renderers for the system.
     * @type {array<Renderer>}
     */

    this.renderers = [];
    /**
     * @desc A pool used to manage the internal system cache of objects
     * @type {Pool}
     */

    this.pool = new Pool();
    /**
     * @desc Internal event dispatcher
     * @type {EventDispatcher}
     */

    this.eventDispatcher = new EventDispatcher();
  }
  /**
   * Creates a System instance from a JSON object.
   *
   * @param {object} json - The JSON to create the System instance from
   * @param {object} THREE - The Web GL Api to use eg., THREE
   * @return {System}
   *
   * @deprecated use fromJSONAsync instead
   */


  static fromJSON(json, THREE) {
    return fromJSON(json, THREE, System, Emitter);
  }
  /**
   * Loads a System instance from JSON asynchronously. Ensures all textures are
   * fully loaded before resolving with the instantiated System instance.
   *
   * @param {object} json - The JSON to create the System instance from
   * @param {object} THREE - The Web GL Api to use eg., THREE
   * @param {?object} options - Optional config options
   * @return {Promise<System>}
   */


  static fromJSONAsync(json, THREE, options) {
    return fromJSONAsync(json, THREE, System, Emitter, options);
  }
  /**
   * Proxy method for the internal event dispatcher's dispatchEvent method.
   *
   * @param {string} event - The event to dispatch
   * @param {object<System|Emitter|Particle>} [target=this] - The event target
   */


  dispatch(event, target = this) {
    this.eventDispatcher.dispatchEvent(event, target);
  }
  /**
   * Adds a renderer to the System instance and initializes it.
   *
   * @param {Renderer} renderer - The renderer to add
   * @return {System}
   */


  addRenderer(renderer) {
    this.renderers.push(renderer);
    renderer.init(this);
    return this;
  }
  /**
   * Removes a renderer from the System instance.
   *
   * @param {Renderer} renderer
   * @return {System}
   */


  removeRenderer(renderer) {
    this.renderers.splice(this.renderers.indexOf(renderer), 1);
    renderer.remove(this);
    return this;
  }
  /**
   * Adds an emitter to the System instance.
   * Dispatches the EMITTER_ADDED event.
   *
   * @param {Emitter} emitter - The emitter to add
   * @return {System}
   */


  addEmitter(emitter) {
    const index = this.emitters.length;
    emitter.parent = this;
    emitter.index = index;
    this.emitters.push(emitter);
    this.dispatch(EMITTER_ADDED, emitter);
    return this;
  }
  /**
   * Removes an emitter from the System instance.
   * Dispatches the EMITTER_REMOVED event.
   *
   * @param {Emitter} emitter - The emitter to remove
   * @return {System}
   */


  removeEmitter(emitter) {
    if (emitter.parent !== this) {
      return this;
    }

    emitter.parent = null;
    emitter.index = undefined;
    this.emitters.splice(this.emitters.indexOf(emitter), 1);
    this.dispatch(EMITTER_REMOVED, emitter);
    return this;
  }
  /**
   * Wires up life cycle methods and causes a system's emitters to emit particles.
   * Expects emitters to have their totalEmitTimes and life set already.
   * Inifnite systems will resolve immediately.
   *
   * @param {object} hooks - Functions to hook into the life cycle API
   * @param {function} hooks.onStart - Called when the system starts to emit particles
   * @param {function} hooks.onUpdate - Called each time the system updates
   * @param {function} hooks.onEnd - Called when the system's emitters have all died
   * @return {Promise}
   */


  emit({
    onStart,
    onUpdate,
    onEnd
  }) {
    if (onStart) {
      onStart();
    }

    if (onUpdate) {
      this.eventDispatcher.addEventListener(SYSTEM_UPDATE, onUpdate);
    }

    const emitters = this.emitters.map(emitter => {
      const {
        life
      } = emitter;

      if (life === Infinity) {
        if (onEnd) {
          onEnd();
        }

        emitter.experimental_emit();
        return Promise.resolve();
      }

      return new Promise(resolve => {
        emitter.addOnEmitterDeadEventListener(() => {
          if (onEnd) {
            onEnd();
          }

          resolve();
        });
        emitter.experimental_emit();
      });
    });

    try {
      return Promise.all(emitters);
    } catch (e) {
      console.warn(e);
    }
  }
  /**
   * Updates the particle system based on the delta passed.
   *
   * @example
   * animate = () => {
   *   threeRenderer.render(threeScene, threeCamera);
   *   system.update();
   *   requestAnimationFrame(animate);
   * }
   * animate();
   *
   * @param {number} delta - Delta time
   * @return {Promise}
   */


  update(delta = DEFAULT_SYSTEM_DELTA) {
    const d = delta || DEFAULT_SYSTEM_DELTA;

    if (this.canUpdate) {
      if (d > 0) {
        let i = this.emitters.length;

        while (i--) {
          const emitter = this.emitters[i];
          emitter.update(d);
          emitter.isEmitting && this.dispatch(SYSTEM_UPDATE);
        }
      }

      this.dispatch(SYSTEM_UPDATE_AFTER);
    }

    return Promise.resolve();
  }
  /**
   * Gets a count of the total number of particles in the system.
   *
   * @return {integer}
   */


  getCount() {
    const length = this.emitters.length;
    let total = 0;
    let i;

    for (i = 0; i < length; i++) {
      total += this.emitters[i].particles.length;
    }

    return total;
  }
  /**
   * Destroys all emitters, renderers and the Nebula pool.
   * Ensures that this.update will not perform any operations while the system
   * is being destroyed.
   *
   * @return void
   */


  destroy() {
    const length = this.emitters.length;
    this.canUpdate = false;

    for (let e = 0; e < length; e++) {
      this.emitters[e] && this.emitters[e].destroy();
      delete this.emitters[e];
    }

    for (let r = 0; r < length; r++) {
      if (this.renderers[r] && this.renderers[r].destroy) {
        this.renderers[r].destroy();
        delete this.renderers[r];
      }
    }

    this.emitters.length = 0;
    this.pool.destroy();
    this.canUpdate = true;
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL1N5c3RlbS5qcyJdLCJuYW1lcyI6WyJFdmVudERpc3BhdGNoZXIiLCJFTUlUVEVSX0FEREVEIiwiRU1JVFRFUl9SRU1PVkVEIiwiU1lTVEVNX1VQREFURSIsIlNZU1RFTV9VUERBVEVfQUZURVIiLCJERUZBVUxUX1NZU1RFTV9ERUxUQSIsIkVtaXR0ZXIiLCJJTlRFR1JBVElPTl9UWVBFX0VVTEVSIiwiUE9PTF9NQVgiLCJQb29sIiwiZnJvbUpTT04iLCJmcm9tSlNPTkFzeW5jIiwiQ09SRV9UWVBFX1NZU1RFTSIsInR5cGUiLCJTeXN0ZW0iLCJjb25zdHJ1Y3RvciIsInByZVBhcnRpY2xlcyIsImludGVncmF0aW9uVHlwZSIsImNhblVwZGF0ZSIsImVtaXR0ZXJzIiwicmVuZGVyZXJzIiwicG9vbCIsImV2ZW50RGlzcGF0Y2hlciIsImpzb24iLCJUSFJFRSIsIm9wdGlvbnMiLCJkaXNwYXRjaCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzcGF0Y2hFdmVudCIsImFkZFJlbmRlcmVyIiwicmVuZGVyZXIiLCJwdXNoIiwiaW5pdCIsInJlbW92ZVJlbmRlcmVyIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlbW92ZSIsImFkZEVtaXR0ZXIiLCJlbWl0dGVyIiwiaW5kZXgiLCJsZW5ndGgiLCJwYXJlbnQiLCJyZW1vdmVFbWl0dGVyIiwidW5kZWZpbmVkIiwiZW1pdCIsIm9uU3RhcnQiLCJvblVwZGF0ZSIsIm9uRW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCIsImxpZmUiLCJJbmZpbml0eSIsImV4cGVyaW1lbnRhbF9lbWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhZGRPbkVtaXR0ZXJEZWFkRXZlbnRMaXN0ZW5lciIsImFsbCIsImUiLCJjb25zb2xlIiwid2FybiIsInVwZGF0ZSIsImRlbHRhIiwiZCIsImkiLCJpc0VtaXR0aW5nIiwiZ2V0Q291bnQiLCJ0b3RhbCIsInBhcnRpY2xlcyIsImRlc3Ryb3kiLCJyIl0sIm1hcHBpbmdz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QUFLbEQsUUFBTCxDQUFjdUMsQ0FBZCxDQUFQO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHN0IsTUFBcEIsRUFBNEI2QixDQUFDLEVBQTdCLEVBQWlDO0FBQy9CLFVBQUksS0FBS2xELFNBQUwsQ0FBZWtELENBQWYsS0FBcUIsS0FBS2xELFNBQUwsQ0FBZWtELENBQWYsRUFBa0JELE9BQTNDLEVBQW9EO0FBQ2xELGFBQUtqRCxTQUFMLENBQWVrRCxDQUFmLEVBQWtCRCxPQUFsQjtBQUNBLGVBQU8sS0FBS2pELFNBQUwsQ0FBZWtELENBQWYsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBS25ELFFBQUwsQ0FBY3NCLE1BQWQsR0FBdUIsQ0FBdkI7QUFDQSxTQUFLcEIsSUFBTCxDQUFVZ0QsT0FBVjtBQUNBLFNBQUtuRCxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBM1N5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudERpc3BhdGNoZXIsIHtcbiAgRU1JVFRFUl9BRERFRCxcbiAgRU1JVFRFUl9SRU1PVkVELFxuICBTWVNURU1fVVBEQVRFLFxuICBTWVNURU1fVVBEQVRFX0FGVEVSLFxufSBmcm9tICcuLi9ldmVudHMnO1xuXG5pbXBvcnQgeyBERUZBVUxUX1NZU1RFTV9ERUxUQSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBFbWl0dGVyIGZyb20gJy4uL2VtaXR0ZXIvRW1pdHRlcic7XG5pbXBvcnQgeyBJTlRFR1JBVElPTl9UWVBFX0VVTEVSIH0gZnJvbSAnLi4vbWF0aC9jb25zdGFudHMnO1xuaW1wb3J0IHsgUE9PTF9NQVggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFBvb2wgZnJvbSAnLi9Qb29sJztcbmltcG9ydCBmcm9tSlNPTiBmcm9tICcuL2Zyb21KU09OJztcbmltcG9ydCBmcm9tSlNPTkFzeW5jIGZyb20gJy4vZnJvbUpTT05Bc3luYyc7XG5pbXBvcnQgeyBDT1JFX1RZUEVfU1lTVEVNIGFzIHR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBUaGUgY29yZSBvZiB0aGUgdGhyZWUtc3lzdGVtIHBhcnRpY2xlIGVuZ2luZS5cbiAqIEEgU3lzdGVtIGluc3RhbmNlIGNhbiBjb250YWluIG11bHRpcGxlIGVtaXR0ZXJzLCBlYWNoIHdpdGggdGhlaXIgb3duIGluaXRpYWxpemVyc1xuICogYW5kIGJlaGF2aW91cnMuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXN0ZW0ge1xuICAvKipcbiAgICogQ29uc3RydWN0cyBhIFN5c3RlbSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFRIUkVFIC0gVGhyZWVKc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3ByZVBhcnRpY2xlcz1QT09MX01BWF0gLSBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBzdGFydCB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaW50ZWdyYXRpb25UeXBlPUlOVEVHUkFUSU9OX1RZUEVfRVVMRVJdIC0gVGhlIGludGVncmF0aW9uIHR5cGUgdG8gdXNlXG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJlUGFydGljbGVzID0gUE9PTF9NQVgsXG4gICAgaW50ZWdyYXRpb25UeXBlID0gSU5URUdSQVRJT05fVFlQRV9FVUxFUlxuICApIHtcbiAgICAvKipcbiAgICAgKiBAZGVzYyBUaGUgY2xhc3MgdHlwZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyBEZXRlcm1pbmVzIGlmIHRoZSBzeXN0ZW0gY2FuIHVwZGF0ZSBvciBub3QuIFNldCB0byBmYWxzZSB3aGVuIGRlc3Ryb3lpbmdcbiAgICAgKiB0byBlbnN1cmUgdGhhdCBleHRlcm5hbCBjYWxscyB0byB1cGRhdGUgZG8gbm90IHRocm93IGVycm9ycy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNhblVwZGF0ZSA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBzdGFydCB3aXRoLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5wcmVQYXJ0aWNsZXMgPSBwcmVQYXJ0aWNsZXM7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyBUaGUgaW50ZWdyYXRpb24gYWxnb3JpdGhtIHR5cGUgdG8gdXNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaW50ZWdyYXRpb25UeXBlID0gaW50ZWdyYXRpb25UeXBlO1xuXG4gICAgLyoqXG4gICAgICogQGRlc2MgVGhlIGVtaXR0ZXJzIGluIHRoZSBwYXJ0aWNsZSBzeXN0ZW0uXG4gICAgICogQHR5cGUge2FycmF5PEVtaXR0ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuZW1pdHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEBkZXNjIFRoZSByZW5kZXJlcnMgZm9yIHRoZSBzeXN0ZW0uXG4gICAgICogQHR5cGUge2FycmF5PFJlbmRlcmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQGRlc2MgQSBwb29sIHVzZWQgdG8gbWFuYWdlIHRoZSBpbnRlcm5hbCBzeXN0ZW0gY2FjaGUgb2Ygb2JqZWN0c1xuICAgICAqIEB0eXBlIHtQb29sfVxuICAgICAqL1xuICAgIHRoaXMucG9vbCA9IG5ldyBQb29sKCk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyBJbnRlcm5hbCBldmVudCBkaXNwYXRjaGVyXG4gICAgICogQHR5cGUge0V2ZW50RGlzcGF0Y2hlcn1cbiAgICAgKi9cbiAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgU3lzdGVtIGluc3RhbmNlIGZyb20gYSBKU09OIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGpzb24gLSBUaGUgSlNPTiB0byBjcmVhdGUgdGhlIFN5c3RlbSBpbnN0YW5jZSBmcm9tXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBUSFJFRSAtIFRoZSBXZWIgR0wgQXBpIHRvIHVzZSBlZy4sIFRIUkVFXG4gICAqIEByZXR1cm4ge1N5c3RlbX1cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21KU09OQXN5bmMgaW5zdGVhZFxuICAgKi9cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIFRIUkVFKSB7XG4gICAgcmV0dXJuIGZyb21KU09OKGpzb24sIFRIUkVFLCBTeXN0ZW0sIEVtaXR0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgU3lzdGVtIGluc3RhbmNlIGZyb20gSlNPTiBhc3luY2hyb25vdXNseS4gRW5zdXJlcyBhbGwgdGV4dHVyZXMgYXJlXG4gICAqIGZ1bGx5IGxvYWRlZCBiZWZvcmUgcmVzb2x2aW5nIHdpdGggdGhlIGluc3RhbnRpYXRlZCBTeXN0ZW0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBqc29uIC0gVGhlIEpTT04gdG8gY3JlYXRlIHRoZSBTeXN0ZW0gaW5zdGFuY2UgZnJvbVxuICAgKiBAcGFyYW0ge29iamVjdH0gVEhSRUUgLSBUaGUgV2ViIEdMIEFwaSB0byB1c2UgZWcuLCBUSFJFRVxuICAgKiBAcGFyYW0gez9vYmplY3R9IG9wdGlvbnMgLSBPcHRpb25hbCBjb25maWcgb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN5c3RlbT59XG4gICAqL1xuICBzdGF0aWMgZnJvbUpTT05Bc3luYyhqc29uLCBUSFJFRSwgb3B0aW9ucykge1xuICAgIHJldHVybiBmcm9tSlNPTkFzeW5jKGpzb24sIFRIUkVFLCBTeXN0ZW0sIEVtaXR0ZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IG1ldGhvZCBmb3IgdGhlIGludGVybmFsIGV2ZW50IGRpc3BhdGNoZXIncyBkaXNwYXRjaEV2ZW50IG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IHRvIGRpc3BhdGNoXG4gICAqIEBwYXJhbSB7b2JqZWN0PFN5c3RlbXxFbWl0dGVyfFBhcnRpY2xlPn0gW3RhcmdldD10aGlzXSAtIFRoZSBldmVudCB0YXJnZXRcbiAgICovXG4gIGRpc3BhdGNoKGV2ZW50LCB0YXJnZXQgPSB0aGlzKSB7XG4gICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChldmVudCwgdGFyZ2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcmVuZGVyZXIgdG8gdGhlIFN5c3RlbSBpbnN0YW5jZSBhbmQgaW5pdGlhbGl6ZXMgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVuZGVyZXJ9IHJlbmRlcmVyIC0gVGhlIHJlbmRlcmVyIHRvIGFkZFxuICAgKiBAcmV0dXJuIHtTeXN0ZW19XG4gICAqL1xuICBhZGRSZW5kZXJlcihyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICAgIHJlbmRlcmVyLmluaXQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgcmVuZGVyZXIgZnJvbSB0aGUgU3lzdGVtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlbmRlcmVyfSByZW5kZXJlclxuICAgKiBAcmV0dXJuIHtTeXN0ZW19XG4gICAqL1xuICByZW1vdmVSZW5kZXJlcihyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnNwbGljZSh0aGlzLnJlbmRlcmVycy5pbmRleE9mKHJlbmRlcmVyKSwgMSk7XG4gICAgcmVuZGVyZXIucmVtb3ZlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBlbWl0dGVyIHRvIHRoZSBTeXN0ZW0gaW5zdGFuY2UuXG4gICAqIERpc3BhdGNoZXMgdGhlIEVNSVRURVJfQURERUQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RW1pdHRlcn0gZW1pdHRlciAtIFRoZSBlbWl0dGVyIHRvIGFkZFxuICAgKiBAcmV0dXJuIHtTeXN0ZW19XG4gICAqL1xuICBhZGRFbWl0dGVyKGVtaXR0ZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZW1pdHRlcnMubGVuZ3RoO1xuXG4gICAgZW1pdHRlci5wYXJlbnQgPSB0aGlzO1xuICAgIGVtaXR0ZXIuaW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMuZW1pdHRlcnMucHVzaChlbWl0dGVyKTtcbiAgICB0aGlzLmRpc3BhdGNoKEVNSVRURVJfQURERUQsIGVtaXR0ZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlbWl0dGVyIGZyb20gdGhlIFN5c3RlbSBpbnN0YW5jZS5cbiAgICogRGlzcGF0Y2hlcyB0aGUgRU1JVFRFUl9SRU1PVkVEIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0VtaXR0ZXJ9IGVtaXR0ZXIgLSBUaGUgZW1pdHRlciB0byByZW1vdmVcbiAgICogQHJldHVybiB7U3lzdGVtfVxuICAgKi9cbiAgcmVtb3ZlRW1pdHRlcihlbWl0dGVyKSB7XG4gICAgaWYgKGVtaXR0ZXIucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlbWl0dGVyLnBhcmVudCA9IG51bGw7XG4gICAgZW1pdHRlci5pbmRleCA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuZW1pdHRlcnMuc3BsaWNlKHRoaXMuZW1pdHRlcnMuaW5kZXhPZihlbWl0dGVyKSwgMSk7XG4gICAgdGhpcy5kaXNwYXRjaChFTUlUVEVSX1JFTU9WRUQsIGVtaXR0ZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogV2lyZXMgdXAgbGlmZSBjeWNsZSBtZXRob2RzIGFuZCBjYXVzZXMgYSBzeXN0ZW0ncyBlbWl0dGVycyB0byBlbWl0IHBhcnRpY2xlcy5cbiAgICogRXhwZWN0cyBlbWl0dGVycyB0byBoYXZlIHRoZWlyIHRvdGFsRW1pdFRpbWVzIGFuZCBsaWZlIHNldCBhbHJlYWR5LlxuICAgKiBJbmlmbml0ZSBzeXN0ZW1zIHdpbGwgcmVzb2x2ZSBpbW1lZGlhdGVseS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGhvb2tzIC0gRnVuY3Rpb25zIHRvIGhvb2sgaW50byB0aGUgbGlmZSBjeWNsZSBBUElcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaG9va3Mub25TdGFydCAtIENhbGxlZCB3aGVuIHRoZSBzeXN0ZW0gc3RhcnRzIHRvIGVtaXQgcGFydGljbGVzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGhvb2tzLm9uVXBkYXRlIC0gQ2FsbGVkIGVhY2ggdGltZSB0aGUgc3lzdGVtIHVwZGF0ZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gaG9va3Mub25FbmQgLSBDYWxsZWQgd2hlbiB0aGUgc3lzdGVtJ3MgZW1pdHRlcnMgaGF2ZSBhbGwgZGllZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgZW1pdCh7IG9uU3RhcnQsIG9uVXBkYXRlLCBvbkVuZCB9KSB7XG4gICAgaWYgKG9uU3RhcnQpIHtcbiAgICAgIG9uU3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoU1lTVEVNX1VQREFURSwgb25VcGRhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGVtaXR0ZXJzID0gdGhpcy5lbWl0dGVycy5tYXAoZW1pdHRlciA9PiB7XG4gICAgICBjb25zdCB7IGxpZmUgfSA9IGVtaXR0ZXI7XG5cbiAgICAgIGlmIChsaWZlID09PSBJbmZpbml0eSkge1xuICAgICAgICBpZiAob25FbmQpIHtcbiAgICAgICAgICBvbkVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW1pdHRlci5leHBlcmltZW50YWxfZW1pdCgpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBlbWl0dGVyLmFkZE9uRW1pdHRlckRlYWRFdmVudExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICBpZiAob25FbmQpIHtcbiAgICAgICAgICAgIG9uRW5kKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlbWl0dGVyLmV4cGVyaW1lbnRhbF9lbWl0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZW1pdHRlcnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFydGljbGUgc3lzdGVtIGJhc2VkIG9uIHRoZSBkZWx0YSBwYXNzZWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGFuaW1hdGUgPSAoKSA9PiB7XG4gICAqICAgdGhyZWVSZW5kZXJlci5yZW5kZXIodGhyZWVTY2VuZSwgdGhyZWVDYW1lcmEpO1xuICAgKiAgIHN5c3RlbS51cGRhdGUoKTtcbiAgICogICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAqIH1cbiAgICogYW5pbWF0ZSgpO1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGEgLSBEZWx0YSB0aW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICB1cGRhdGUoZGVsdGEgPSBERUZBVUxUX1NZU1RFTV9ERUxUQSkge1xuICAgIGNvbnN0IGQgPSBkZWx0YSB8fCBERUZBVUxUX1NZU1RFTV9ERUxUQTtcblxuICAgIGlmICh0aGlzLmNhblVwZGF0ZSkge1xuICAgICAgaWYgKGQgPiAwKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5lbWl0dGVycy5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSB0aGlzLmVtaXR0ZXJzW2ldO1xuXG4gICAgICAgICAgZW1pdHRlci51cGRhdGUoZCk7XG4gICAgICAgICAgZW1pdHRlci5pc0VtaXR0aW5nICYmIHRoaXMuZGlzcGF0Y2goU1lTVEVNX1VQREFURSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwYXRjaChTWVNURU1fVVBEQVRFX0FGVEVSKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIGNvdW50IG9mIHRoZSB0b3RhbCBudW1iZXIgb2YgcGFydGljbGVzIGluIHRoZSBzeXN0ZW0uXG4gICAqXG4gICAqIEByZXR1cm4ge2ludGVnZXJ9XG4gICAqL1xuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmVtaXR0ZXJzLmxlbmd0aDtcblxuICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdG90YWwgKz0gdGhpcy5lbWl0dGVyc1tpXS5wYXJ0aWNsZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95cyBhbGwgZW1pdHRlcnMsIHJlbmRlcmVycyBhbmQgdGhlIE5lYnVsYSBwb29sLlxuICAgKiBFbnN1cmVzIHRoYXQgdGhpcy51cGRhdGUgd2lsbCBub3QgcGVyZm9ybSBhbnkgb3BlcmF0aW9ucyB3aGlsZSB0aGUgc3lzdGVtXG4gICAqIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICpcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZW1pdHRlcnMubGVuZ3RoO1xuXG4gICAgdGhpcy5jYW5VcGRhdGUgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGUgPSAwOyBlIDwgbGVuZ3RoOyBlKyspIHtcbiAgICAgIHRoaXMuZW1pdHRlcnNbZV0gJiYgdGhpcy5lbWl0dGVyc1tlXS5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5lbWl0dGVyc1tlXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCByID0gMDsgciA8IGxlbmd0aDsgcisrKSB7XG4gICAgICBpZiAodGhpcy5yZW5kZXJlcnNbcl0gJiYgdGhpcy5yZW5kZXJlcnNbcl0uZGVzdHJveSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyc1tyXS5kZXN0cm95KCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlbmRlcmVyc1tyXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVtaXR0ZXJzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5wb29sLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNhblVwZGF0ZSA9IHRydWU7XG4gIH1cbn1cbiJdfQ==