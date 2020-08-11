# Gradient Heat Map - Version 0.9.11

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Example

[See an simple example!](https://marcusvi200.github.io/gradient-heat-map/)

## How to use

### Instantiating a GradientHeatMap

```js
var divEl = document.getElementById('barColor');
var gradientHeatMap = new GradientHeatMap(divEl);
```

### Run the Gradient in Object

```js
let percentage = 50;
let startColor = "#008000";
let middleColor = "#ffff00";
let endColor = "#ff0000";

gradientHeatMap.run(position_GradientHeatMap.right,percentage,startColor,middleColor,endColor);
```

### Position types
| Position | Direction |
|----------|-----------|
| **position_GradientHeatMap.top** | To top |
| **position_GradientHeatMap.right** | To right |
| **position_GradientHeatMap.left** | To left |
| **position_GradientHeatMap.bottom** | To bottom |
| **position_GradientHeatMap.top_right** | Diagonal from right to top |
| **position_GradientHeatMap.top_left** | Diagonal from left to top |
| **position_GradientHeatMap.bottom_right** | Diagonal from right to bottom |
| **position_GradientHeatMap.bottom_left** | Diagonal from left to bottom |
