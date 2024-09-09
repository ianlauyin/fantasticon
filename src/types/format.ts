import svg2ttf from 'svg2ttf';
import ttf2woff from 'ttf2woff';
import { SVGIcons2SVGFontStreamOptions } from 'svgicons2svgfont';
import { Arguments } from './utils';

type WoffOptions = Arguments<typeof ttf2woff>[1];
type TtfOptions = svg2ttf.FontOptions;
type SvgOptions = Omit<
  Partial<SVGIcons2SVGFontStreamOptions>,
  'fontName' | 'fontHeight' | 'descent' | 'normalize'
>;

interface JsonOptions {
  indent?: number;
}

interface TsOptions {
  types?: ('enum' | 'constant' | 'literalId' | 'literalKey')[];
  singleQuotes?: boolean;
  enumName?: string;
  constantName?: string;
  literalIdName?: string;
  literalKeyName?: string;
}

export interface FormatOptions {
  woff?: WoffOptions;
  ttf?: TtfOptions;
  svg?: SvgOptions;
  json?: JsonOptions;
  ts?: TsOptions;
}
