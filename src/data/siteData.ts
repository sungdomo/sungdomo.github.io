export interface Affiliation {
  role: string;
  department?: string;
  departmentUrl?: string;
  organization: string;
  organizationUrl: string;
  current?: boolean;
}

export interface NewsItem {
  date: string;
  displayDate: string;
  text: string;
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  position: string;
  department: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  institutionUrl: string;
  departmentUrl?: string;
  location: string;
  degree: string;
  area: string;
  period: string;
  dissertation?: string;
  dissertationUrl?: string;
  advisor?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  abbr: string;
  year: number;
  month?: string;
  pages?: string;
  volume?: string;
  number?: string;
  type: 'conference' | 'journal' | 'thesis' | 'techreport';
  doi?: string;
  url?: string;
  scholarId?: string;
  selected?: boolean;
  abstract: string;
  bibtex: string;
}

export interface SocialLink {
  label: string;
  category: 'primary' | 'academic' | 'social';
  url: string;
  handle?: string;
  icon: string;
}

export const profile = {
  name: 'Sungdo Moon',
  firstName: 'Sungdo',
  lastName: 'Moon',
  headline: 'Advisor at Samsung Electronics MX & Adjunct Professor at Dongguk University',
  tagline:
    'Technology executive, researcher, and educator specializing in On-Device AI, Android Systems, Mobile Platform Architecture, and Optimizing & Parallelizing Compilers.',
  email: 'sungdo.moon@gmail.com',
  location: 'Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea',
  avatar: '/images/prof_pic.png',
  currentAffiliations: [
    {
      role: 'Advisor',
      department: 'MX (Mobile eXperience)',
      organization: 'Samsung Electronics',
      organizationUrl: 'https://www.samsung.com/',
      current: true,
    },
    {
      role: 'Adjunct Professor',
      department: 'System & Software Engineering Institute (SEI)',
      departmentUrl: 'https://sw.dongguk.edu/',
      organization: 'Dongguk University',
      organizationUrl: 'https://www.dongguk.edu/',
      current: true,
    },
  ] satisfies Affiliation[],
  previousHighlights: [
    {
      role: 'Corporate EVP',
      department: 'System R&D Team, MX',
      organization: 'Samsung Electronics',
      organizationUrl: 'https://www.samsung.com/',
    },
    {
      role: 'SW Engineer',
      department: 'Java, Compilers & Tools Lab',
      organization: 'Hewlett-Packard Company',
      organizationUrl: 'https://www.hpe.com/',
    },
    {
      role: 'PhD / MS',
      department: 'Computer Science',
      departmentUrl: 'https://cs.usc.edu/',
      organization: 'University of Southern California',
      organizationUrl: 'https://www.usc.edu/',
    },
    {
      role: 'BS',
      department: 'Physics / Computer Engineering',
      departmentUrl: 'https://physics.snu.ac.kr/',
      organization: 'Seoul National University',
      organizationUrl: 'https://www.snu.ac.kr/',
    },
  ] satisfies Affiliation[],
  expertise: [
    'On-Device AI & Mobile Intelligence',
    'Android System & Platform Architecture',
    'Optimizing & Parallelizing Compilers',
    'Cross-Module Interprocedural Optimization (IPO)',
    'Virtualization & Multi-Core Tools',
    'System BSP & SoC Integration',
  ],
  languages: [
    { language: 'Korean', fluency: 'Native speaker' },
    { language: 'English', fluency: 'Fluent' },
  ],
};

export const newsItems: NewsItem[] = [
  {
    date: '2026-08-03',
    displayDate: 'Aug 2026',
    text: 'Started something new.',
  },
  {
    date: '2025-03-01',
    displayDate: 'Mar 2025',
    text: 'Appointed as an Adjunct Professor at Dongguk University.',
  },
  {
    date: '2025-01-01',
    displayDate: 'Jan 2025',
    text: 'A new start — transitioned to Advisor role at Samsung Electronics MX Business Unit.',
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Dongguk University',
    companyUrl: 'https://sw.dongguk.edu/',
    position: 'Adjunct Professor',
    department: 'SEI (System & Software Engineering)',
    location: 'Seoul, Korea',
    period: 'Mar 2025 – Present',
    startDate: '2025-03',
    endDate: 'Present',
    highlights: ['Computer Science & Software Engineering Education and Mentorship'],
    current: true,
  },
  {
    company: 'Samsung Electronics',
    companyUrl: 'https://www.samsung.com/',
    position: 'Advisor',
    department: 'MX (Mobile eXperience) Business Unit',
    location: 'Suwon, Korea',
    period: 'Dec 2024 – Nov 2026',
    startDate: '2024-12',
    endDate: '2026-11',
    highlights: ['Executive technical advisory for Mobile eXperience (MX) system software and AI architecture'],
    current: true,
  },
  {
    company: 'Samsung Electronics',
    companyUrl: 'https://www.samsung.com/',
    position: 'Corporate EVP',
    department: 'MX Business Unit · System R&D Team Lead',
    location: 'Suwon, Korea',
    period: 'Dec 2021 – Nov 2024',
    startDate: '2021-12',
    endDate: '2024-11',
    highlights: ['Led the System R&D Team for Galaxy flagship devices', 'Spearheaded On-Device AI software architecture and system optimization'],
  },
  {
    company: 'Samsung Electronics',
    companyUrl: 'https://www.samsung.com/',
    position: 'Corporate SVP',
    department: 'MX Business Unit · System S/W R&D Team & CP R&D Team Lead',
    location: 'Suwon, Korea',
    period: 'Dec 2020 – Nov 2021',
    startDate: '2020-12',
    endDate: '2021-11',
    highlights: ['Directed Android system software and cellular processor (CP) R&D organizations'],
  },
  {
    company: 'Samsung Electronics',
    companyUrl: 'https://www.samsung.com/',
    position: 'Corporate VP',
    department: 'Mobile Business Unit · System Core / System Platform Group Lead',
    location: 'Suwon, Korea',
    period: 'Dec 2012 – Nov 2020',
    startDate: '2012-12',
    endDate: '2020-11',
    highlights: ['Led core Android system platform engineering across global Galaxy lineups'],
  },
  {
    company: 'Samsung Electronics',
    companyUrl: 'https://www.samsung.com/',
    position: 'Principal Engineer',
    department: 'Mobile Business Unit · Android BSP T/F Lead',
    location: 'Suwon, Korea',
    period: 'Dec 2010 – Nov 2012',
    startDate: '2010-12',
    endDate: '2012-11',
    highlights: ['System SW Task Force Lead for System LSI AP-based Galaxy S III, Galaxy S IV, and Galaxy Note'],
  },
  {
    company: 'Samsung Electronics',
    companyUrl: 'https://www.samsung.com/',
    position: 'Principal Engineer',
    department: 'SW Center / DM Research / SAIT · Technical Research Lead',
    location: 'Suwon, Korea',
    period: 'Aug 2007 – Nov 2010',
    startDate: '2007-08',
    endDate: '2010-11',
    highlights: ['Led advanced research on system virtualization and multi-core software development tools'],
  },
  {
    company: 'Hewlett-Packard Company',
    companyUrl: 'https://www.hpe.com/',
    position: 'Software Engineer',
    department: 'Java, Compilers, and Tools Lab',
    location: 'Cupertino, CA, USA',
    period: 'Oct 2000 – Jul 2007',
    startDate: '2000-10',
    endDate: '2007-07',
    highlights: ['Architected and developed HP-UX Itanium compilers and the SYZYGY scalable cross-module interprocedural optimization (IPO) framework'],
  },
];

export const educationItems: EducationItem[] = [
  {
    institution: 'University of Southern California',
    institutionUrl: 'https://www.usc.edu/',
    departmentUrl: 'https://cs.usc.edu/',
    location: 'Los Angeles, CA, USA',
    degree: 'PhD in Computer Science',
    area: 'Computer Science',
    period: 'Sep 1994 – Oct 2000',
    dissertation: 'Combining Compile-Time and Run-Time Parallelization',
    dissertationUrl: 'https://doi.org/10.25549/usctheses-c16-224653',
    advisor: 'Mary W. Hall',
  },
  {
    institution: 'University of Southern California',
    institutionUrl: 'https://www.usc.edu/',
    departmentUrl: 'https://cs.usc.edu/',
    location: 'Los Angeles, CA, USA',
    degree: 'MS in Computer Science',
    area: 'Computer Science',
    period: 'Sep 1991 – May 1993',
  },
  {
    institution: 'Seoul National University',
    institutionUrl: 'https://www.snu.ac.kr/',
    departmentUrl: 'https://physics.snu.ac.kr/',
    location: 'Seoul, Korea',
    degree: 'BS in Physics',
    area: 'Physics (Minor in Computer Engineering)',
    period: 'Mar 1987 – Feb 1991',
  },
];

export const publications: Publication[] = [
  {
    id: 'kim_maximizing_2011',
    title: 'Maximizing Synchronization Coverage Via Controlling Thread Schedule',
    authors: ['HyoYoung Kim', 'DaeHyun Cho', 'Sungdo Moon'],
    venue: "2011 IEEE Consumer Communications and Networking Conference (CCNC '11)",
    abbr: 'CCNC',
    year: 2011,
    month: 'Jan',
    pages: '1186–1191',
    type: 'conference',
    doi: '10.1109/CCNC.2011.5766365',
    url: 'https://ieeexplore.ieee.org/abstract/document/5766365',
    scholarId: '2tRrZ1ZAMYUC',
    selected: true,
    abstract:
      'Coverage analysis has been playing an important role in testing traditional single threaded applications. As the number of multicore hardware being used increases, the number of multithreaded applications grows as well. In multi-threaded environment, traditional code coverage models cannot really cover the nondeterministic behavior of simultaneously running threads. The concept of synchronization coverage was invented to solve this problem. In this paper, we present a new coverage testing tool which maximizes synchronization coverage rates with less time and repetition. After searching for synchronization primitives, our tool instruments special code segments to these points and forces the application executions to maximize its synchronization coverage by scheduling individual threads. This enables achieving maximum synchronization coverage without manipulating source code or writing unit test code. We implemented this method and showed that our method achieves maximum synchronization coverage rates 1.5 to over 144 times faster than random method.',
    bibtex: `@inproceedings{kim_maximizing_2011,
  title = {Maximizing {Synchronization} {Coverage} {Via} {Controlling} {Thread} {Schedule}},
  url = {https://ieeexplore.ieee.org/abstract/document/5766365},
  doi = {10.1109/CCNC.2011.5766365},
  booktitle = {2011 IEEE Consumer Communications and Networking Conference ({CNCC'11})},
  author = {Kim, HyoYoung and Cho, DaeHyun and Moon, Sungdo},
  month = jan,
  year = {2011},
  pages = {1186--1191}
}`,
  },
  {
    id: 'moon_syzygy_2004',
    title: 'SYZYGY – A Framework for Scalable Cross-Module IPO',
    authors: [
      'Sungdo Moon',
      'Xinliang D. Li',
      'Robert Hundt',
      'Dhruva R. Chakrabarti',
      'Luis A. Lozano',
      'Uma Srinivasan',
      'Shin-Ming Liu',
    ],
    venue: '2004 International Symposium on Code Generation and Optimization (CGO ’04)',
    abbr: 'CGO',
    year: 2004,
    month: 'Mar',
    pages: '65–74',
    type: 'conference',
    doi: '10.1109/CGO.2004.1281664',
    url: 'https://ieeexplore.ieee.org/abstract/document/1281664',
    scholarId: 'UeHWp8X0CEIC',
    selected: true,
    abstract:
      'Performing analysis across module boundaries for an entire program is important for exploiting several runtime performance opportunities. However, due to scalability problems in existing full-program analysis frameworks, such performance opportunities are only realized by paying tremendous compile-time costs. Alternative solutions, such as partial compilations or user assertions, are complicated or unsafe and as a result, not many commercial applications are compiled today with cross-module optimizations. We present SYZYGY, a practical framework for performing efficient, scalable, interprocedural optimizations. The framework is implemented in the HP-UX Itanium compilers and we have successfully compiled many very large applications consisting of millions of lines of code. We achieved performance improvements of up to 40% over optimization level two and compilation time improvements in the order of 100% and more compared to a previous approach.',
    bibtex: `@inproceedings{moon_syzygy_2004,
  title = {{SYZYGY} - {A} {Framework} for {Scalable} {Cross}-{Module} {IPO}},
  url = {https://ieeexplore.ieee.org/abstract/document/1281664},
  doi = {10.1109/CGO.2004.1281664},
  booktitle = {2004 International Symposium on Code Generation and Optimization ({CGO'04})},
  author = {Moon, Sungdo and Li, Xinliang D. and Hundt, Robert and Chakrabarti, Dhruva R. and Lozano, Luis A. and Srinivasan, Uma and Liu, Shin-Ming},
  month = mar,
  year = {2004},
  pages = {65--74}
}`,
  },
  {
    id: 'moon_combining_2002',
    title: 'Combining Compile-Time and Run-Time Parallelization',
    authors: ['Sungdo Moon'],
    venue: 'PhD Dissertation, University of Southern California',
    abbr: 'Dissertation',
    year: 2002,
    month: 'May',
    type: 'thesis',
    url: 'https://doi.org/10.25549/usctheses-c16-224653',
    abstract:
      "In this dissertation, we investigate how good today's parallelizing compilers are, what opportunities remain to improve them, and what technology is needed to exploit the remaining opportunities. To answer these questions, we perform experiments that measure the safety of parallelization at run time for loops left unparallelized by the Stanford SUIF compiler's automatic parallelization system. The experimental results demonstrate that significant improvements to automatic parallelization technology require that existing systems be extended in two ways: (1) they must combine high-quality compile-time analysis with low-cost run-time testing; and, (2) they must take control flow into account during analysis. In order to exploit these remaining opportunities, we have developed a new compile-time analysis technique called predicated array data-flow analysis. Experimental results with a prototype implementation show that predicated array data-flow analysis parallelizes more than 40% of the remaining inherently parallel loops left unparallelized by the SUIF compiler, demonstrating improved speedups with negligible run-time overhead.",
    bibtex: `@phdthesis{moon_combining_2002,
  title = {Combining {Compile}-{Time} and {Run}-{Time} {Parallelization}},
  url = {https://doi.org/10.25549/usctheses-c16-224653},
  school = {University of Southern California},
  author = {Moon, Sungdo},
  month = may,
  year = {2002}
}`,
  },
  {
    id: 'moon_evaluating_2000',
    title: 'Evaluating Automatic Parallelization in SUIF',
    authors: ['Sungdo Moon', 'Byoungro So', 'Mary W. Hall'],
    venue: 'IEEE Transactions on Parallel and Distributed Systems (TPDS)',
    abbr: 'TPDS',
    year: 2000,
    month: 'Jan',
    volume: '11',
    number: '1',
    pages: '36–49',
    type: 'journal',
    doi: '10.1109/71.824639',
    url: 'https://ieeexplore.ieee.org/abstract/document/824639',
    scholarId: '2osOgNQ5qMEC',
    selected: true,
    abstract:
      'This paper presents the results of an experiment to measure empirically the remaining opportunities for exploiting loop-level parallelism that are missed by the Stanford SUIF compiler, a state-of-the-art automatic parallelization system targeting shared-memory multiprocessor architectures. For the purposes of this experiment, we have developed a run-time parallelization test called the Extended Lazy Privatizing Doall (ELPD) test, which is able to simultaneously test multiple loops in a loop nest. For 29 programs in three benchmark suites, the ELPD test was executed at run time for each candidate loop left unparallelized by the SUIF compiler to identify which of these loops could safely execute in parallel for the given program input. The results of this experiment point to two main requirements for improving the effectiveness of parallelizing compiler technology: incorporating control flow tests into analysis and extracting low-cost run-time parallelization tests from analysis results.',
    bibtex: `@article{moon_evaluating_2000,
  title = {Evaluating {Automatic} {Parallelization} in {SUIF}},
  volume = {11},
  number = {1},
  url = {https://ieeexplore.ieee.org/abstract/document/824639},
  doi = {10.1109/71.824639},
  journal = {IEEE Transactions on Parallel and Distributed Systems},
  author = {Moon, Sungdo and So, Byoungro and Hall, Mary W.},
  month = jan,
  year = {2000},
  pages = {36--49}
}`,
  },
  {
    id: 'chame_tile_1999',
    title: 'A Tile Selection Algorithm for Data Locality and Cache Interference',
    authors: ['Jacqueline Chame', 'Sungdo Moon'],
    venue: "The 13th ACM International Conference on Supercomputing (ICS '99)",
    abbr: 'ICS',
    year: 1999,
    month: 'Jun',
    pages: '492–499',
    type: 'conference',
    doi: '10.1145/305138.305245',
    url: 'https://dl.acm.org/doi/10.1145/305138.305245',
    scholarId: 'u5HHmVD_uO8C',
    selected: true,
    abstract:
      'Loop tiling is a well-known compiler transformation that increases data locality, exposes parallelism and reduces synchronization costs. Tiling increases the amount of data reuse that can be exploited by reordering the loop iterations so that accesses to the same data are closer together in time. However, tiled loops often suffer from cache interference in the direct-mapped or low-associativity caches typically found in state-of-the-art microprocessors. A solution to this problem is to choose a tile size that does not exhibit self interference. In this paper, we propose a new tile selection algorithm for eliminating self interference and simultaneously minimizing capacity and cross-interference misses. We have automated the algorithm in the SUIF compiler and used it to generate tiles for a range of problem sizes for three scientific computations. Our experimental results show that the algorithm consistently finds tiles that yield lower miss rates than existing tile selection algorithms.',
    bibtex: `@inproceedings{chame_tile_1999,
  series = {{ICS} '99},
  title = {A {Tile} {Selection} {Algorithm} for {Data} {Locality} and {Cache} {Interference}},
  url = {https://dl.acm.org/doi/10.1145/305138.305245},
  doi = {10.1145/305138.305245},
  booktitle = {The 13th International Conference on Supercomputing ({ICS'99})},
  publisher = {Association for Computing Machinery},
  author = {Chame, Jacqueline and Moon, Sungdo},
  month = jun,
  year = {1999},
  pages = {492--499}
}`,
  },
  {
    id: 'moon_evaluation_1999',
    title: 'Evaluation of Predicated Array Data-Flow Analysis for Automatic Parallelization',
    authors: ['Sungdo Moon', 'Mary W. Hall'],
    venue: "The 7th ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming (PPoPP '99)",
    abbr: 'PPoPP',
    year: 1999,
    month: 'May',
    pages: '84–95',
    type: 'conference',
    doi: '10.1145/301104.301112',
    url: 'https://dl.acm.org/doi/10.1145/301104.301112',
    scholarId: 'u-x6o8ySG0sC',
    selected: true,
    abstract:
      'This paper presents an evaluation of a new analysis for parallelizing compilers called predicated array data-flow analysis. This analysis extends array data-flow analysis for parallelization and privatization to associate predicates with data-flow values. These predicates can be used to derive conditions under which dependences can be eliminated or privatization is possible. These conditions can be used both to enhance compile-time analysis and to introduce run-time tests that guard safe execution of a parallelized version of a computation. As compared to previous work that combines predicates with array data-flow analysis, our approach is distinguished by two features: (1) it derives low-cost, run-time parallelization tests; and, (2) it incorporates predicate embedding and predicate extraction, which translate between the domain of predicates and data-flow values to derive more precise analysis results. We present extensive experimental results across three benchmark suites and one additional program, demonstrating that predicated array data-flow analysis parallelizes more than 40% of the remaining inherently parallel loops left unparallelized by the SUIF compiler and that it yields improved speedups for 5 programs.',
    bibtex: `@inproceedings{moon_evaluation_1999,
  series = {{PPoPP} '99},
  title = {Evaluation of {Predicated} {Array} {Data}-{Flow} {Analysis} for {Automatic} {Parallelization}},
  url = {https://dl.acm.org/doi/10.1145/301104.301112},
  doi = {10.1145/301104.301112},
  booktitle = {The 7th ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming ({PPoPP'99})},
  publisher = {Association for Computing Machinery},
  author = {Moon, Sungdo and Hall, Mary W.},
  month = may,
  year = {1999},
  pages = {84--95}
}`,
  },
  {
    id: 'moon_combining_1999',
    title: 'Combining Compile-Time and Run-Time Parallelization',
    authors: ['Sungdo Moon', 'Byoungro So', 'Mary W. Hall'],
    venue: 'Scientific Programming',
    abbr: 'SP',
    year: 1999,
    volume: '7',
    number: '3-4',
    pages: '247–260',
    type: 'journal',
    doi: '10.1155/1999/490628',
    url: 'https://onlinelibrary.wiley.com/doi/abs/10.1155/1999/490628',
    scholarId: 'Y0pCki6q_DkC',
    abstract:
      'This paper demonstrates that significant improvements to automatic parallelization technology require that existing systems be extended in two ways: (1) they must combine high-quality compile-time analysis with low-cost run-time testing; and (2) they must take control flow into account during analysis. We support this claim with the results of an experiment that measures the safety of parallelization at run time for loops left unparallelized by the Stanford SUIF compiler’s automatic parallelization system. We present results of measurements on programs from two benchmark suites – SPECFP95 and NAS sample benchmarks – which identify inherently parallel loops in these programs that are missed by the compiler. We characterize remaining parallelization opportunities, and find that most of the loops require run-time testing, analysis of control flow, or some combination of the two. We present a new compile-time analysis technique called predicated array data-flow analysis that can be used to parallelize most of these remaining loops.',
    bibtex: `@article{moon_combining_1999,
  title = {Combining {Compile}-{Time} and {Run}-{Time} {Parallelization}},
  volume = {7},
  number = {3-4},
  url = {https://onlinelibrary.wiley.com/doi/abs/10.1155/1999/490628},
  doi = {10.1155/1999/490628},
  journal = {Scientific Programming},
  author = {Moon, Sungdo and So, Byoungro and Hall, Mary W.},
  year = {1999},
  pages = {247--260}
}`,
  },
  {
    id: 'moon_predicated_1998',
    title: 'Predicated Array Data-Flow Analysis for Run-Time Parallelization',
    authors: ['Sungdo Moon', 'Mary W. Hall', 'Brian R. Murphy'],
    venue: "The 12th ACM International Conference on Supercomputing (ICS '98)",
    abbr: 'ICS',
    year: 1998,
    month: 'Jul',
    pages: '204–211',
    type: 'conference',
    doi: '10.1145/277830.277874',
    url: 'https://dl.acm.org/doi/10.1145/277830.277874',
    scholarId: 'd1gkVwhDpl0C',
    abstract:
      'This paper presents a new analysis for parallelizing compilers called predicated array data-flow analysis, whereby array dataflow analysis for parallelization and privatization is extended to associate predicates with data-flow values. These predicates can be used to derive conditions under which dependences can be eliminated or privatization is possible. These conditions, which can consist of arbitrary program statements, can be used both to enhance compile-time analysis and to introduce run-time tests that guard safe execution of a parallelized version of a computation. We have implemented predicated array data-flow analysis in the Stanford SUIF compiler. We describe features of the implementation and present experimental results that demonstrate this analysis improves the performance of three programs from the SPEC95FP benchmark suite.',
    bibtex: `@inproceedings{moon_predicated_1998,
  series = {{ICS} '98},
  title = {Predicated {Array} {Data}-{Flow} {Analysis} for {Run}-{Time} {Parallelization}},
  url = {https://dl.acm.org/doi/10.1145/277830.277874},
  doi = {10.1145/277830.277874},
  booktitle = {The 12th International Conference on Supercomputing ({ICS'98})},
  publisher = {Association for Computing Machinery},
  author = {Moon, Sungdo and Hall, Mary W. and Murphy, Brian R.},
  month = jul,
  year = {1998},
  pages = {204--211}
}`,
  },
  {
    id: 'so_measuring_1998',
    title: 'Measuring the Effectiveness of Automatic Parallelization in SUIF',
    authors: ['Byoungro So', 'Sungdo Moon', 'Mary W. Hall'],
    venue: "The 12th ACM International Conference on Supercomputing (ICS '98)",
    abbr: 'ICS',
    year: 1998,
    month: 'Jul',
    pages: '212–219',
    type: 'conference',
    doi: '10.1145/277830.277876',
    url: 'https://dl.acm.org/doi/10.1145/277830.277876',
    scholarId: 'qjMakFHDy7sC',
    abstract:
      'This paper presents both an experiment and a system for inserting run-time dependence and privatization testing. The goal of the experiment is to measure empirically the remaining opportunities for exploiting loop-level parallelism that are missed by state-of-the-art parallelizing compiler technology. We perform run-time testing of data accessed within all candidate loops not parallelized by the compiler to identify which of these loops could safely execute in parallel for the given program input. This system extends the Lazy Privatizing Doall (LPD) test to simultaneously instrument multiple loops in a nest. Using the results of interprocedural array dataflow analysis, we avoid unnecessary instrumentation of arrays with compile-time provable dependences or loops nested inside outer parallelized loops. We have implemented the system in the Stanford SUIF compiler and have measured programs in three benchmark suites.',
    bibtex: `@inproceedings{so_measuring_1998,
  series = {{ICS} '98},
  title = {Measuring the {Effectiveness} of {Automatic} {Parallelization} in {SUIF}},
  url = {https://dl.acm.org/doi/10.1145/277830.277876},
  doi = {10.1145/277830.277876},
  booktitle = {The 12th International Conference on Supercomputing ({ICS'98})},
  publisher = {Association for Computing Machinery},
  author = {So, Byoungro and Moon, Sungdo and Hall, Mary W.},
  month = jul,
  year = {1998},
  pages = {212--219}
}`,
  },
  {
    id: 'moon_case_1998',
    title: 'A Case for Combining Compile-Time and Run-Time Parallelization',
    authors: ['Sungdo Moon', 'Byoungro So', 'Mary W. Hall', 'Brian R. Murphy'],
    venue: "The 4th International Workshop on Languages, Compilers, and Run-Time Systems for Scalable Computers (LCR '98)",
    abbr: 'LCR',
    year: 1998,
    month: 'May',
    pages: '91–106',
    type: 'conference',
    doi: '10.1007/3-540-49530-4_7',
    url: 'https://doi.org/10.1007/3-540-49530-4_7',
    scholarId: 'Tyk-4Ss8FVUC',
    abstract:
      'This paper demonstrates that significant improvements to automatic parallelization technology require that existing systems be extended in two ways: (1) they must combine high-quality compile-time analysis with low-cost run-time testing; and, (2) they must take control flow into account during analysis. We support this claim with the results of an experiment that measures the safety of parallelization at run time for loops left unparallelized by the Stanford SUIF compiler’s automatic parallelization system. We present results of measurements on programs from two benchmark suites — Specfp95 and Nas sample benchmarks — which identify inherently parallel loops in these programs that are missed by the compiler. We characterize remaining parallelization opportunities, and find that most of the loops require run-time testing, analysis of control flow, or some combination of the two.',
    bibtex: `@inproceedings{moon_case_1998,
  title = {A {Case} for {Combining} {Compile}-{Time} and {Run}-{Time} {Parallelization}},
  doi = {10.1007/3-540-49530-4_7},
  booktitle = {The 4th International Workshop on Languages, Compilers, and Run-Time Systems for Scalable Computers ({LCR'98})},
  publisher = {Springer},
  author = {Moon, Sungdo and So, Byoungro and Hall, Mary W. and Murphy, Brian R.},
  month = may,
  year = {1998},
  pages = {91--106}
}`,
  },
  {
    id: 'moon_hyperblocking_1998',
    title: 'Hyperblocking: A Data Reorganization Method to Eliminate Cache Conflicts in Tiled Loop Nests',
    authors: ['Sungdo Moon', 'Rafael H. Saavedra'],
    venue: 'USC Technical Report USC–CSTR–98–671',
    abbr: 'USC TR',
    year: 1998,
    month: 'Feb',
    type: 'techreport',
    url: 'https://digitallibrary.usc.edu/asset-management/2A3BF1S4H2US0',
    scholarId: 'IjCSPb-OGe4C',
    abstract:
      'This paper presents hyperblocking, or hypertiling, a novel optimization technique that makes it possible to drastically eliminate the self and cross interference misses of tiled loop nests, while significantly reducing the overhead involved in copying data blocks. In hyperblocking, all arrays used in a tiled loop nest are reorganized at the beginning of the computation such that all data blocks are guaranteed to map into disjoint and contiguous cache regions. Doing this effectively eliminates the occurrence of interference misses in many dense-matrix computations. When data prefetching is used in combination with hyperblocking, it is possible to completely hide the latency of capacity misses, and given that no cache conflicts can occur, it makes it possible to increase the prefetch distance to cover larger latencies without causing any amount of cache pollution.',
    bibtex: `@techreport{moon_hyperblocking_1998,
  title = {Hyperblocking: {A} {Data} {Reorganization} {Method} to {Eliminate} {Cache} {Conflicts} in {Tiled} {Loop} {Nests}},
  url = {https://digitallibrary.usc.edu/asset-management/2A3BF1S4H2US0},
  number = {USC–CSTR–98–671},
  institution = {USC},
  author = {Moon, Sungdo and Saavedra, Rafael H.},
  month = feb,
  year = {1998}
}`,
  },
  {
    id: 'park_adaptive_1997',
    title: 'Adaptive Granularity: Transparent Integration of Fine- and Coarse-Grain Communication',
    authors: ['Daeyeon Park', 'Rafael H. Saavedra', 'Sungdo Moon'],
    venue: 'International Journal of Parallel Programming (IJPP)',
    abbr: 'IJPP',
    year: 1997,
    month: 'Oct',
    volume: '25',
    number: '5',
    pages: '419–446',
    type: 'journal',
    doi: '10.1007/BF02699885',
    url: 'https://doi.org/10.1007/BF02699885',
    scholarId: 'zYLM7Y9cAGgC',
    abstract:
      'The granularity of shared data is one of the key factors affecting the performance of distributed shared memory machines (DSM). Given that programs exhibit quite different sharing patterns, providing only one or two fixed granularities cannot result in an efficient use of resources. On the other hand, supporting arbitrarily granularity sizes significantly increases not only hardware complexity but software overhead as well. In this paper, we present a new communication scheme, called Adaptive Granularity (AG). Adaptive Granularity makes it possible to transparently integrate bulk transfer into the shared memory model by supporting variable-size granularity and memory replication. Simulation results show that AG improves performance up to 43% over the hardware implementation of DSM (e.g., DASH, Alewife).',
    bibtex: `@article{park_adaptive_1997,
  title = {Adaptive {Granularity}: {Transparent} {Integration} of {Fine}- and {Coarse}-{Grain} {Communication}},
  volume = {25},
  number = {5},
  url = {https://doi.org/10.1007/BF02699885},
  doi = {10.1007/BF02699885},
  journal = {International Journal of Parallel Programming},
  author = {Park, Daeyeon and Saavedra, Rafael H. and Moon, Sungdo},
  month = oct,
  year = {1997},
  pages = {419--446}
}`,
  },
  {
    id: 'saavedra_combined_1996',
    title: 'The Combined Effectiveness of Unimodular Transformations, Tiling, and Software Prefetching',
    authors: ['Rafael H. Saavedra', 'Weihua Mao', 'Daeyeon Park', 'Jacqueline Chame', 'Sungdo Moon'],
    venue: "The 1996 International Conference on Parallel Processing (ICPP '96)",
    abbr: 'ICPP',
    year: 1996,
    month: 'Aug',
    pages: '39–45',
    type: 'conference',
    doi: '10.1109/IPPS.1996.508037',
    url: 'https://ieeexplore.ieee.org/abstract/document/508037',
    scholarId: '9yKSN-GCB0IC',
    abstract:
      'Unimodular transformations, tiling, and software prefetching are loop optimizations known to be effective in increasing parallelism, reducing cache miss rates, and eliminating processor stall time. Although these optimizations individually are quite effective, there is the expectation that even better improvements can be obtained by combining them together. In this paper we show that indeed this is the case when unimodular transformations are combined with either tiling or software prefetching. However, our results also show that although combining tiling with prefetching tends to improve the performance of tiling alone, it is also the case that in some situations tiling can degrade the cache performance of software prefetching.',
    bibtex: `@inproceedings{saavedra_combined_1996,
  title = {The {Combined} {Effectiveness} of {Unimodular} {Transformations}, {Tiling}, and {Software} {Prefetching}},
  url = {https://ieeexplore.ieee.org/abstract/document/508037},
  doi = {10.1109/IPPS.1996.508037},
  booktitle = {The 1996 International Conference on Parallel Processing ({ICPP'96})},
  author = {Saavedra, Rafael H. and Mao, Weihua and Park, Daeyeon and Chame, Jacqueline and Moon, Sungdo},
  month = aug,
  year = {1996},
  pages = {39--45}
}`,
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    category: 'primary',
    url: 'mailto:sungdo.moon@gmail.com',
    handle: 'sungdo.moon@gmail.com',
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    category: 'primary',
    url: 'https://www.linkedin.com/in/sungdomoon',
    handle: 'in/sungdomoon',
    icon: 'linkedin',
  },
  {
    label: 'Google Scholar',
    category: 'primary',
    url: 'https://scholar.google.com/citations?user=PuD26bsAAAAJ',
    handle: 'Sungdo Moon',
    icon: 'scholar',
  },
  {
    label: 'GitHub',
    category: 'primary',
    url: 'https://github.com/sungdomo',
    handle: '@sungdomo',
    icon: 'github',
  },
  {
    label: 'ORCID',
    category: 'academic',
    url: 'https://orcid.org/0009-0004-3662-906X',
    handle: '0009-0004-3662-906X',
    icon: 'orcid',
  },
  {
    label: 'ACM Digital Library',
    category: 'academic',
    url: 'https://dl.acm.org/profile/81452618581',
    handle: '81452618581',
    icon: 'acm',
  },
  {
    label: 'IEEE Xplore',
    category: 'academic',
    url: 'https://ieeexplore.ieee.org/author/38061184600',
    handle: '38061184600',
    icon: 'ieee',
  },
  {
    label: 'DBLP',
    category: 'academic',
    url: 'https://dblp.org/pid/93/6400',
    handle: '93/6400',
    icon: 'dblp',
  },
  {
    label: 'Semantic Scholar',
    category: 'academic',
    url: 'https://www.semanticscholar.org/author/Sungdo-Moon/1807451',
    handle: '1807451',
    icon: 'semanticscholar',
  },
  {
    label: 'Scopus',
    category: 'academic',
    url: 'https://www.scopus.com/authid/detail.uri?authorId=7401616802',
    handle: '7401616802',
    icon: 'scopus',
  },
  {
    label: 'ResearchGate',
    category: 'academic',
    url: 'https://www.researchgate.net/profile/Sungdo-Moon-2',
    handle: 'Sungdo-Moon-2',
    icon: 'researchgate',
  },
  {
    label: 'X (Twitter)',
    category: 'social',
    url: 'https://x.com/sungdomo',
    handle: '@sungdomo',
    icon: 'x',
  },
  {
    label: 'Bluesky',
    category: 'social',
    url: 'https://bsky.app/profile/sungdomo.bsky.social',
    handle: '@sungdomo.bsky.social',
    icon: 'bluesky',
  },
];
