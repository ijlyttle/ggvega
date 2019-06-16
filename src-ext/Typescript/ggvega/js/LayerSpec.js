import * as vlspec from './VlSpec';
import { TranslateEncoding } from './Encoding';
/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(layer, ggSpec) {
    var layerspec = {
        data: {
            name: layer['data']
        },
        mark: TranslateMark(layer['geom'], layer['aes_params']),
        encoding: TranslateEncoding(layer, ggSpec)
    };
    return layerspec;
}
function TranslateMark(geom, aesParams) {
    var type;
    if (geom['class'] == 'GeomPoint') {
        type = vlspec.BoxPlot.Point;
    }
    else {
        type = vlspec.BoxPlot.Point;
    }
    var opacity;
    var fill;
    var stroke;
    var strokeWidth;
    var shape;
    if (aesParams) {
        if (aesParams['alpha']) {
            opacity = aesParams['alpha']['value'];
        }
        if (aesParams['fill']) {
            fill = aesParams['fill']['value'];
            stroke = aesParams['colour']['value'];
        }
        if (aesParams['stroke']) {
            strokeWidth = aesParams['stroke']['value'];
        }
        if (aesParams['shape'] && geom['class'] == 'GeomPoint') {
            var ggShape = aesParams['shape']['value'];
            if (ggShape % 8 == 0) {
                shape = 'circle';
            }
            if (ggShape % 8 == 1) {
                shape = 'square';
            }
            if (ggShape % 8 == 2) {
                shape = 'cross';
            }
            if (ggShape % 8 == 3) {
                shape = 'diamond';
            }
            if (ggShape % 8 == 4) {
                shape = 'triangle-up';
            }
            if (ggShape % 8 == 5) {
                shape = 'triangle-down';
            }
            if (ggShape % 8 == 6) {
                shape = 'triangle-right';
            }
            if (ggShape % 8 == 7) {
                shape = 'triangle-left';
            }
        }
    }
    var mark = {
        type: type,
        opacity: opacity,
        fill: fill,
        stroke: stroke,
        strokeWidth: strokeWidth,
        shape: shape
    };
    return mark;
}
