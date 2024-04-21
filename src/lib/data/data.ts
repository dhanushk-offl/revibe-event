import type { Agenda, Gallery, Sponsors, modelagenda } from '$lib/type';

export const agenda: Agenda[] = [
    {
        title: "Registration",
        time: "08:30 AM - 10:20 AM",
        venue: "@Auditorium",
        category: "other",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713352067/REGISTRATION_oak6z2.png"
    },
    {
        title: "Inaugration",
        time: "09:15 AM - 09:50 AM",
        venue: "@Auditorium",
        category: "other",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713106143/others_bg_pxrnqt.png"
    },
    {
        title: "Paper Presentation",
        time: "10:30 AM - 03:00 PM",
        venue: "@Technology Tower",
        category: "tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712932203/ppt2_v4ojw8.jpg"
    },
    {
        title: "Coding & Debugging",
        time: "10:30 AM - 12:30 PM",
        venue: "@Tech Tower",
        category: "tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712929338/side-shot-code-editor-using-react-js_1_kx81jc.jpg"
    }, {
        title: "Web Designing",
        time: "11:00 AM - 12:00 PM",
        venue: "@EEE Classroom",
        category: "tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712926375/person-front-computer-working-html_1_sbdwik.jpg"
    }, {
        title: "Technical Quiz",
        time: "10:30 AM - 12:00 PM",
        venue: "@MBA Seminar Hall",
        category: "tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712930233/85313464_SL-050620-30640-05_1_tmzjor.jpg"
    }, {
        title: "Connections",
        time: "01:30 AM - 03:00 PM",
        venue: "@MBA Seminar Hall",
        category: "non-tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713110932/connt_zebkic.png"
    }, {
        title: "Cooking Without Fire",
        time: "11:00 AM - 12:30 PM",
        venue: "@EEE Seminar Hall",
        category: "non-tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713107714/cwf2_zvyjjf.png"
    },
    {
        title: "Photography",
        time: "10:30 AM - 02:00 PM",
        venue: "@Auditorium",
        category: "non-tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712939082/photgraphy_ilvlzo.jpg"
    }, 
    {
        title: "Meme Creation",
        time: "10:30 AM - 02:00 PM",
        venue: "@Auditorium",
        category: "non-tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712938215/meme_lvkoss.jpg"
    },
    {
        title: "Chess",
        time: "11:00 AM - 12:30 PM",
        venue: "@Mechanical Block",
        category: "games",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712937281/chess_qrzn4x.jpg"
    }, {
        title: "BGMI & Free Fire",
        time: "01:30 PM - 03:00 PM",
        venue: "@Auditorium",
        category: "games",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712760425/bgmi-vs-freefire-max_dhoj6q.webp"
    }, {
        title: "Art(Painting & Pencil)",
        time: "01:30 PM - 02:30 PM",
        venue: "@Mechanical Block",
        category: "non-tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712938470/art_zoiggj.jpg"
    },
    {
        title: "Act Like a GOAT",
        time: "01:30 PM - 03:00 PM",
        venue: "@Auditorium",
        category: "non-tech",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712939622/goat_enso5i.jpg"
    },
    {
        title: "Gully Cricket",
        time: "10:30 PM - 03:30 PM",
        venue: "@Baseket Ball Arena",
        category: "games",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712936329/gully_frdonm.jpg"
    },
    {
        title: "Vote of thanks",
        time: "03:40 PM - 04:30 PM",
        venue: "@Auditorium",
        category: "other",
        image:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713106143/others_bg_pxrnqt.png"
    },
];

export const gallery: Gallery[] = [
    {
        pic: "https://res.cloudinary.com/dwir71gi2/image/upload/v1712759931/IMG_4102_vyczbd.jpg",
        des: "Gallery One"
    },
    {
        pic: "https://res.cloudinary.com/dwir71gi2/image/upload/v1712759912/PXL_20220528_115539516.MP_ta4e2p.jpg",
        des: "Gallery One"
    },
    {
        pic: "https://res.cloudinary.com/dwir71gi2/image/upload/v1712823462/IMG20230318170724_hecq6t.jpg",
        des: "Gallery One"
    }, 
    {
        pic: "https://res.cloudinary.com/dwir71gi2/image/upload/v1712823452/IMG_4231_kh4zzj.jpg",
        des: "Gallery One"
    },

    {
        pic: "https://res.cloudinary.com/dwir71gi2/image/upload/v1712823453/DSC_1079.NEF_kdrrmu.jpg",
        des: "Gallery One"
    }
];

export const model: modelagenda[] = [
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Coding & Debugging",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    },
    {
        eventname: "Paper Presentation",
        eventimage: "",
        eventtiming: "10.00 AM - ",
        price: "100",
        description: "Rules",
        tags:['tech'],
        register: ""

    }

    

];
export const sponsors: Sponsors[] = [
    {
        logo:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713103840/nandhini_beauty_parlour_xdxetc.png",
        company:"Nandhini's Beauty Studio & Academy",
        website:""
    },    
    {
        logo:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712729315/Meg_s_bakes_logo_liy6rp.jpg",
        company:"Meg's Bakes - Arcot",
        website:""
    },
    {
        logo:"https://res.cloudinary.com/dwir71gi2/image/upload/v1712760000/cadd_sponser_tetfxb.jpg",
        company:"G-Academy",
        website:""
    },
    {
        logo:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713103849/crispy_delight_bkigi8.png",
        company:"Crispy Delight",
        website:""
    },
    {
        logo:"https://res.cloudinary.com/dwir71gi2/image/upload/v1713104033/IMG-20240401-WA0031-removebg-preview_iltth5.png",
        company:"Anbu Electronics",
        website:""
    }


];
