// Metadata for the real oblast boundaries in kazakhstanPaths.ts
// (source: uploaded MapSVG file, pre-2022 14-oblast division).

export type RegionMeta = {
  id: string // matches KzPath.id
  name: string
  arid: boolean
  note: string
}

export const regionMeta: Record<string, RegionMeta> = {
  'KZ-ZAP': {
    id: 'KZ-ZAP',
    name: 'Батыс Қазақстан облысы',
    arid: true,
    note: 'Климаттың қатаңдануы мен жауын-шашынның азаюы салдарынан құрғақшылық үдеп келеді.',
  },
  'KZ-ATY': {
    id: 'KZ-ATY',
    name: 'Атырау облысы',
    arid: true,
    note: 'Каспий маңы аймағы — судың тапшылығы мен топырақ тұздануы басты мәселе.',
  },
  'KZ-MAN': {
    id: 'KZ-MAN',
    name: 'Маңғыстау облысы',
    arid: true,
    note: 'Үстірт үстіртінің шөлейт аймағы, жауын-шашын жылына 100-150 мм-ден аспайды.',
  },
  'KZ-AKT': {
    id: 'KZ-AKT',
    name: 'Ақтөбе облысы',
    arid: true,
    note: 'Батыс өңірдегі негізгі құрғақшылық ошақтарының бірі.',
  },
  'KZ-KUS': {
    id: 'KZ-KUS',
    name: 'Қостанай облысы',
    arid: true,
    note: 'Қарқынды егіншілік пен мал шаруашылығы топырақтың тозуын күшейтеді.',
  },
  'KZ-AKM': {
    id: 'KZ-AKM',
    name: 'Ақмола облысы',
    arid: true,
    note: 'Солтүстік дала аймағында егіншілік әсерінен топырақ тозуы байқалады.',
  },
  'KZ-KZY': {
    id: 'KZ-KZY',
    name: 'Қызылорда облысы',
    arid: true,
    note: 'Арал теңізінің тартылуы аймақты әлемдегі ең жас шөл аймақтарының біріне айналдырды.',
  },
  'KZ-SEV': {
    id: 'KZ-SEV',
    name: 'Солтүстік Қазақстан облысы',
    arid: false,
    note: 'Егіншілікке қолайлы дала аймағы.',
  },
  'KZ-PAV': {
    id: 'KZ-PAV',
    name: 'Павлодар облысы',
    arid: false,
    note: 'Өнеркәсіп пен ауыл шаруашылығы дамыған солтүстік-шығыс өңір.',
  },
  'KZ-VOS': {
    id: 'KZ-VOS',
    name: 'Шығыс Қазақстан облысы',
    arid: false,
    note: 'Алтай тау бөктерлеріндегі орманды-тау аймағы.',
  },
  'KZ-KAR': {
    id: 'KZ-KAR',
    name: 'Қарағанды облысы',
    arid: false,
    note: 'Орталық Қазақстанның ірі өнеркәсіп орталығы.',
  },
  'KZ-YUZ': {
    id: 'KZ-YUZ',
    name: 'Түркістан облысы',
    arid: false,
    note: 'Оңтүстіктегі суармалы егіншілік аймағы (бұрынғы Оңтүстік Қазақстан облысы).',
  },
  'KZ-ZHA': {
    id: 'KZ-ZHA',
    name: 'Жамбыл облысы',
    arid: false,
    note: 'Оңтүстіктегі ауыл шаруашылығы дамыған өңір.',
  },
  'KZ-ALM': {
    id: 'KZ-ALM',
    name: 'Алматы облысы',
    arid: false,
    note: 'Іле Алатауы бөктерлеріндегі жасыл аймақ — GEOLEADER жобасы осы өңірде.',
  },
}

// Real lon/lat -> this SVG's own coordinate space, using the source file's geoViewBox
// (minLon 46.48944, maxLat 55.432742, maxLon 87.315881, minLat 40.549293).
const MIN_LON = 46.48944
const MAX_LAT = 55.432742
const MAX_LON = 87.315881
const MIN_LAT = 40.549293
const SVG_W = 792.54694
const SVG_H = 434.92221

export function geoToSvg(lon: number, lat: number): [number, number] {
  const x = ((lon - MIN_LON) / (MAX_LON - MIN_LON)) * SVG_W
  const y = ((MAX_LAT - lat) / (MAX_LAT - MIN_LAT)) * SVG_H
  return [x, y]
}

export const cities: { id: string; name: string; lon: number; lat: number }[] = [
  { id: 'astana', name: 'Астана', lon: 71.45, lat: 51.18 },
  { id: 'almaty', name: 'Алматы', lon: 76.9, lat: 43.25 },
  { id: 'shymkent', name: 'Шымкент', lon: 69.6, lat: 42.3 },
]
