export default {
  getRGB: function (color) {
    var rgb = {};

    if (typeof color === 'number') {
      hex = Math.floor(color);
      rgb.r = (color >> 16 & 255) / 255;
      rgb.g = (color >> 8 & 255) / 255;
      rgb.b = (color & 255) / 255;
    } else if (typeof color === 'string') {
      var m;

      if (m = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(color)) {
        rgb.r = Math.min(255, parseInt(m[1], 10)) / 255;
        rgb.g = Math.min(255, parseInt(m[2], 10)) / 255;
        rgb.b = Math.min(255, parseInt(m[3], 10)) / 255; // eslint-disable-next-line no-useless-escape
      } else if (m = /^\#([A-Fa-f0-9]+)$/.exec(color)) {
        var hex = m[1];
        rgb.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
        rgb.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
        rgb.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;
      }
    } else {
      rgb.r = color.r;
      rgb.g = color.g;
      rgb.b = color.b;
    }

    return rgb;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9Db2xvclV0aWwuanMiXSwibmFtZXMiOlsiZ2V0UkdCIiwiY29sb3IiLCJyZ2IiLCJoZXgiLCJNYXRoIiwiZmxvb3IiLCJyIiwiZyIsImIiLCJtIiwiZXhlYyIsIm1pbiIsInBhcnNlSW50IiwiY2hhckF0Il0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2JBLEVBQUFBLE1BQU0sRUFBRSxVQUFTQyxLQUFULEVBQWdCO0FBQ3RCLFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUVBLFFBQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QkUsTUFBQUEsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osS0FBWCxDQUFOO0FBQ0FDLE1BQUFBLEdBQUcsQ0FBQ0ksQ0FBSixHQUFRLENBQUVMLEtBQUssSUFBSSxFQUFWLEdBQWdCLEdBQWpCLElBQXdCLEdBQWhDO0FBQ0FDLE1BQUFBLEdBQUcsQ0FBQ0ssQ0FBSixHQUFRLENBQUVOLEtBQUssSUFBSSxDQUFWLEdBQWUsR0FBaEIsSUFBdUIsR0FBL0I7QUFDQUMsTUFBQUEsR0FBRyxDQUFDTSxDQUFKLEdBQVEsQ0FBQ1AsS0FBSyxHQUFHLEdBQVQsSUFBZ0IsR0FBeEI7QUFDRCxLQUxELE1BS08sSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3BDLFVBQUlRLENBQUo7O0FBRUEsVUFDR0EsQ0FBQyxHQUFHLGdFQUFnRUMsSUFBaEUsQ0FDSFQsS0FERyxDQURQLEVBSUU7QUFDQUMsUUFBQUEsR0FBRyxDQUFDSSxDQUFKLEdBQVFGLElBQUksQ0FBQ08sR0FBTCxDQUFTLEdBQVQsRUFBY0MsUUFBUSxDQUFDSCxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU8sRUFBUCxDQUF0QixJQUFvQyxHQUE1QztBQUNBUCxRQUFBQSxHQUFHLENBQUNLLENBQUosR0FBUUgsSUFBSSxDQUFDTyxHQUFMLENBQVMsR0FBVCxFQUFjQyxRQUFRLENBQUNILENBQUMsQ0FBQyxDQUFELENBQUYsRUFBTyxFQUFQLENBQXRCLElBQW9DLEdBQTVDO0FBQ0FQLFFBQUFBLEdBQUcsQ0FBQ00sQ0FBSixHQUFRSixJQUFJLENBQUNPLEdBQUwsQ0FBUyxHQUFULEVBQWNDLFFBQVEsQ0FBQ0gsQ0FBQyxDQUFDLENBQUQsQ0FBRixFQUFPLEVBQVAsQ0FBdEIsSUFBb0MsR0FBNUMsQ0FIQSxDQUlBO0FBQ0QsT0FURCxNQVNPLElBQUtBLENBQUMsR0FBRyxxQkFBcUJDLElBQXJCLENBQTBCVCxLQUExQixDQUFULEVBQTRDO0FBQ2pELFlBQUlFLEdBQUcsR0FBR00sQ0FBQyxDQUFDLENBQUQsQ0FBWDtBQUVBUCxRQUFBQSxHQUFHLENBQUNJLENBQUosR0FBUU0sUUFBUSxDQUFDVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxDQUFYLElBQWdCVixHQUFHLENBQUNVLE1BQUosQ0FBVyxDQUFYLENBQWpCLEVBQWdDLEVBQWhDLENBQVIsR0FBOEMsR0FBdEQ7QUFDQVgsUUFBQUEsR0FBRyxDQUFDSyxDQUFKLEdBQVFLLFFBQVEsQ0FBQ1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsQ0FBWCxJQUFnQlYsR0FBRyxDQUFDVSxNQUFKLENBQVcsQ0FBWCxDQUFqQixFQUFnQyxFQUFoQyxDQUFSLEdBQThDLEdBQXREO0FBQ0FYLFFBQUFBLEdBQUcsQ0FBQ00sQ0FBSixHQUFRSSxRQUFRLENBQUNULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLENBQVgsSUFBZ0JWLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLENBQVgsQ0FBakIsRUFBZ0MsRUFBaEMsQ0FBUixHQUE4QyxHQUF0RDtBQUNEO0FBQ0YsS0FuQk0sTUFtQkE7QUFDTFgsTUFBQUEsR0FBRyxDQUFDSSxDQUFKLEdBQVFMLEtBQUssQ0FBQ0ssQ0FBZDtBQUNBSixNQUFBQSxHQUFHLENBQUNLLENBQUosR0FBUU4sS0FBSyxDQUFDTSxDQUFkO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ00sQ0FBSixHQUFRUCxLQUFLLENBQUNPLENBQWQ7QUFDRDs7QUFFRCxXQUFPTixHQUFQO0FBQ0Q7QUFuQ1ksQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0UkdCOiBmdW5jdGlvbihjb2xvcikge1xuICAgIHZhciByZ2IgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG4gICAgICBoZXggPSBNYXRoLmZsb29yKGNvbG9yKTtcbiAgICAgIHJnYi5yID0gKChjb2xvciA+PiAxNikgJiAyNTUpIC8gMjU1O1xuICAgICAgcmdiLmcgPSAoKGNvbG9yID4+IDgpICYgMjU1KSAvIDI1NTtcbiAgICAgIHJnYi5iID0gKGNvbG9yICYgMjU1KSAvIDI1NTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBtO1xuXG4gICAgICBpZiAoXG4gICAgICAgIChtID0gL14oXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqKCxcXHMqKFswLTldKlxcLj9bMC05XSspXFxzKik/JC8uZXhlYyhcbiAgICAgICAgICBjb2xvclxuICAgICAgICApKVxuICAgICAgKSB7XG4gICAgICAgIHJnYi5yID0gTWF0aC5taW4oMjU1LCBwYXJzZUludChtWzFdLCAxMCkpIC8gMjU1O1xuICAgICAgICByZ2IuZyA9IE1hdGgubWluKDI1NSwgcGFyc2VJbnQobVsyXSwgMTApKSAvIDI1NTtcbiAgICAgICAgcmdiLmIgPSBNYXRoLm1pbigyNTUsIHBhcnNlSW50KG1bM10sIDEwKSkgLyAyNTU7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgICAgfSBlbHNlIGlmICgobSA9IC9eXFwjKFtBLUZhLWYwLTldKykkLy5leGVjKGNvbG9yKSkpIHtcbiAgICAgICAgdmFyIGhleCA9IG1bMV07XG5cbiAgICAgICAgcmdiLnIgPSBwYXJzZUludChoZXguY2hhckF0KDApICsgaGV4LmNoYXJBdCgxKSwgMTYpIC8gMjU1O1xuICAgICAgICByZ2IuZyA9IHBhcnNlSW50KGhleC5jaGFyQXQoMikgKyBoZXguY2hhckF0KDMpLCAxNikgLyAyNTU7XG4gICAgICAgIHJnYi5iID0gcGFyc2VJbnQoaGV4LmNoYXJBdCg0KSArIGhleC5jaGFyQXQoNSksIDE2KSAvIDI1NTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmdiLnIgPSBjb2xvci5yO1xuICAgICAgcmdiLmcgPSBjb2xvci5nO1xuICAgICAgcmdiLmIgPSBjb2xvci5iO1xuICAgIH1cblxuICAgIHJldHVybiByZ2I7XG4gIH0sXG59O1xuIl19