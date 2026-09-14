export type SubjectMaterial = {
  label: string
  file: string
  type?: 'file' | 'image' | 'video' // defaults to 'file'
}

export type SubjectEntry = {
  slug: string
  name: string
  intro: string
  items: SubjectMaterial[]
}

export const subjectMaterials: Record<string, SubjectEntry> = {
  'kazakh-language': {
    slug: 'kazakh-language',
    name: 'Қазақ тілі мен әдебиеті пәнімен байланыс',
    intro:
      'Оқушылар далалық зерттеу нәтижелерін үндеу мен эссе жанрында дәлелді тілде баяндайды — зерттеу тек сандар мен кестелермен шектелмей, көркем сөзбен де жеткізіледі.',
    items: [
      { label: 'Жер-ананың халыққа үндеуі', file: '/materials/kazakh-language/earth-appeal.docx' },
      { label: 'Оқушының халыққа үндеуі', file: '/materials/kazakh-language/student-appeal.docx' },
      { label: 'SWOT талдау (эссе)', file: '/materials/kazakh-language/swot-analysis.docx' },
    ],
  },
  history: {
    slug: 'history',
    name: 'Қазақстан тарихы пәнімен байланыс',
    intro:
      'Алматының экологиялық тарихы мен апорт өлкетану дерегі қазіргі географиялық зерттеумен байланыстырылады — өткен мен бүгінгі ахуал салыстырылады.',
    items: [
      { label: 'Алматы апортының тарихы', file: '/materials/history/aport-history.docx' },
      { label: 'Тарихи SWOT талдау', file: '/materials/history/historical-swot-analysis.docx' },
      { label: 'ҚР экологиялық жағдайының тарихы', file: '/materials/history/kz-ecology-history.docx' },
      {
        label: 'Алматының экологиялық жай-күйінің тарихи сипаты',
        file: '/materials/history/almaty-ecology-historical-character.docx',
      },
    ],
  },
  chemistry: {
    slug: 'chemistry',
    name: 'Химия пәнімен байланыс',
    intro:
      'Автокөліктен бөлінетін көмірқышқыл газының мөлшерін есептеу және Алматы қаласы аудандарының ауа ластану деңгейін химиялық тұрғыдан талдау.',
    items: [
      {
        label: 'Алматы қ. аудандарының ластану деңгейі',
        file: '/materials/chemistry/almaty-districts-pollution.pptx',
        type: 'file',
      },
      {
        label: 'Ластануды есептеу видеосы',
        file: '/materials/chemistry/pollution-calculation.mp4',
        type: 'video',
      },
      {
        label: 'Ластануды есептеу — тақтадағы шешім 1',
        file: '/materials/chemistry/pollution-calculation-1.jpeg',
        type: 'image',
      },
      {
        label: 'Ластануды есептеу — тақтадағы шешім 2',
        file: '/materials/chemistry/pollution-calculation-2.jpeg',
        type: 'image',
      },
    ],
  },
}
