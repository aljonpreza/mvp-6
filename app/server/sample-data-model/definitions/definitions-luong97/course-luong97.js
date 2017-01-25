defineCoursesLuong97 = function() {
    let luong97Courses = [
        {
            name: "Object Oriented Programming",
            slug: "ee205",
            number: "EE 205",
            description: "Second-level programming for computer engineers. Object-oriented programming paradigm, definition and use of classes, fundamentals of object-oriented design in modern object-oriented languages such as C++. Common data structures, simple searching and sorting techniques. CEE, EE, ME, PREN majors only. A-F only. Pre: 160 or consent. (Once a year). For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxEVDVvY0RkV2NqNWc/view)",
            tags: ["software-engineering", "computer-engineering"]
        },
        {
            name: "Basic Circuit Analysis I",
            slug: "ee211",
            number: "EE 211",
            credithrs: 4,
            description: "Linear passive circuits, time domain analysis, transient and steady-state responses, phasors, impedance and admittance; power and energy, frequency responses, resonance. Pre: MATH 243 (or concurrent) or MATH 252A (or concurrent), and PHYS 272 (or concurrent); or consent. For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxEZzNySFBJUlQ0U1k/view).",
            tags: ["electrical-engineering", "computer-engineering", "circuit-design", "calculus"]
        },
        {
            name: "Basic Circuit Analysis II",
            slug: "ee213",
            number: "EE 213",
            credithrs: 4,
            description: "(3 Lec, 1 3-hr Lab) Laplace transforms and their application to circuits, Fourier transforms and their applications to circuits, frequency selective circuits, introduction to and design of active filters, convolution, and state space analysis of circuits. A-F only. Pre: 211, and MATH 244 (or concurrent) or MATH 253A (or concurrent); or consent. For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxEdUx3OHNvNW16Ukk/view).",
            tags: ["electrical-engineering", "computer-engineering", "matlab", "circuit-design", "calculus"]
        },
        {
            name: "Introduction to Digital Design",
            slug: "ee260",
            number: "EE 260",
            credithrs: 4,
            description: "Introduction to the design of digital systems with an emphasis on design methods and the implementation and use of fundamental digital components. Pre: 160 or 110 or ICS 111 or consent. For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxETnZER3lON1daRVU/view).",
            tags: ["microprocessor-design", "electrical-engineering", "computer-architecture", "computer-engineering", "circuit-design"]
        },
        {
            name: "Signal and Systems Analysis",
            slug: "ee315",
            number: "EE 315",
            description: "Discrete-time and continuous time signals and systems, linear systems, convolution, Fourier series, Fourier transform, sampling. Pre: 213 and either MATH 244 or MATH 253A; or consent. For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxEM3Y1Yi1HOVJNNXM/view).",
            tags: ["matlab", "electrical-engineering", "computer-engineering", "calculus"]
        }
    ];

    _.each(luong97Courses, RadGrad.course.define);
};
