import {TranslateLayer, TranslateMark} from '../src/layer';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('LayerSpec/TranslateLayer', () => {
  it('should translate ggSpec `layer` to vega-lite `layer`', () => {
    const vlLayer = TranslateLayer(ggSpec.ggSpec01.data, ggSpec.ggSpec01.layers[0]);

    expect(vlLayer).toEqual(vlSpec.vlSpec01['layer'][0]);
  });
});

describe('LayerSpec/TranslateMart', () => {
  it('should only accept standard `geom` type', () => {
    expect(() => {
      TranslateMark(ggSpec.invalidSpec04['layers'][0]['geom']);
    }).toThrowError();
  });
});
