import all from '../../assets/icons/all.png';
import nails from '../../assets/icons/nails.png';
import waxing from '../../assets/icons/waxing.png';
import makeup from '../../assets/icons/makeup.png';
import massage from '../../assets/icons/massage.png';
import body from '../../assets/icons/body.png';

export const services = [
    { id: 1, name: "Shellac Manicure & Pedicure", price: 52, duration: 135 },
    { id: 2, name: "Shellac Manicure", price: 45, duration: 20 },
    { id: 3, name: "Shellac Pedicure", price: 32, duration: 75 },
    { id: 4, name: "Shellac Removal", price: 8, duration: 20 },
    { id: 5, name: "Spa Manicure & Pedicure", price: 60, duration: 150 },
    { id: 6, name: "Spa Manicure", price: 24, duration: 65 },
    { id: 7, name: "Spa Pedicure", price: 36, duration: 75 },
    { id: 8, name: "Manicure & Pedicure", price: 41.60, duration: 75 },
    { id: 9, name: "Manicure", price: 17.60, duration: 45 },
    { id: 10, name: "Pedicure", price: 24, duration: 60 },
    { id: 11, name: "File & Polish", price: 10.40, duration: 20 },
    { id: 12, name: "Ladies' Waxing - Hollywood (Strip Wax)", price: 21, duration: 30 },
    { id: 13, name: "Ladies' Waxing - Brazilian (Strip Wax)", price: 17.50, duration: 30 },
    { id: 14, name: "Ladies' Waxing - Bikini (Strip Wax)", price: 7, duration: 15 },
    { id: 15, name: "Ladies' Waxing - Leg (Strip Wax)", price: 7, duration: 30 },
    { id: 16, name: "Ladies' Waxing - Arm & Underarm (Strip Wax)", price: 7, duration: 10 },
    { id: 17, name: "Ladies' Waxing - Face (Strip Wax)", price: 3.50, duration: 10 },
    { id: 18, name: "Ladies' Waxing - Upper Body (Strip Wax)", price: 7, duration: 15 },
    { id: 19, name: "Ladies' Waxing - Full Body (Strip Wax)", price: 49, duration: 120 },
    { id: 20, name: "Ladies' Waxing - Hollywood (Hot Wax)", price: 24.50, duration: 30 },
    { id: 21, name: "Ladies' Waxing - Brazilian (Hot Wax)", price: 24, duration: 30 },
    { id: 22, name: "Ladies' Waxing - Bikini (Hot Wax)", price: 10.50, duration: 15 },
    { id: 23, name: "Ladies' Waxing - Underarm (Hot Wax)", price: 10.50, duration: 10 },
    { id: 24, name: "Ladies' Waxing - Arm (Hot Wax)", price: 14, duration: 15 },
    { id: 25, name: "Ladies' Waxing - Face (Hot Wax)", price: 4.90, duration: 10 },
    { id: 26, name: "Men's Waxing - Back (Strip Wax)", price: 14, duration: 30 },
    { id: 27, name: "Men's Waxing - Chest (Strip Wax)", price: 10.50, duration: 20 },
    { id: 28, name: "Men's Waxing - Stomach (Strip Wax)", price: 10.50, duration: 20 },
    { id: 29, name: "Men's Waxing - Eyebrows", price: 7, duration: 15 },
    { id: 30, name: "Eyebrow & Eyelash Tinting", price: 7, duration: 10 },
    { id: 31, name: "Eyebrow Waxing", price: 4.90, duration: 10 },
    { id: 32, name: "Facial - Caudalie Prescriptive Customised", price: 42, duration: 60 },
    { id: 33, name: "Facial - Caudalie Anti-Ageing, Firming & Perfection", price: 49, duration: 75 },
    { id: 34, name: "Facial - Caudalie Express", price: 21, duration: 30 },
    { id: 35, name: "Deep Tissue Massage", price: 48, duration: 60 },
    { id: 36, name: "Swedish Massage", price: 40, duration: 60 },
    { id: 37, name: "Aromatherapy Massage", price: 44, duration: 60 },
    { id: 38, name: "Back, Neck & Shoulders Massage", price: 20, duration: 30 },
    { id: 39, name: "Back Massage", price: 24, duration: 30 },
    { id: 40, name: "Reflexology", price: 20, duration: 30 },
    { id: 41, name: "Full Body Scrub", price: 21, duration: 45 },
    { id: 42, name: "Nourishing Body Wrap", price: 28, duration: 60 },
    { id: 43, name: "Cellulite Massage Treatment", price: 28, duration: 60 }
];

export const types = [
    { id: 1, name: "Manicures & Pedicures", services: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { id: 2, name: "Ladies' Waxing - Strip Wax", services: [12, 13, 14, 15, 16, 17, 18, 19] },
    { id: 3, name: "Ladies' Waxing - Lycon Hot Wax", services: [20, 21, 22, 23, 24, 25] },
    { id: 4, name: "Men's Waxing", services: [26, 27, 28, 29] },
    { id: 5, name: "Eyebrows & Eyelashes", services: [30, 31] },
    { id: 6, name: "Facials - Caudalie", services: [32, 33, 34] },
    { id: 7, name: "Massage", services: [35, 36, 37, 38, 39, 40] },
    { id: 8, name: "Body Spa Treatments", services: [41, 42] },
    { id: 9, name: "Weight Loss & Cellulite Treatments", services: [43] }
];

export const categories = [
    { id: 1, name: "All", types: [1, 2, 3, 4, 5, 6, 7, 8, 9], icon: all },
    { id: 2, name: "Nails", types: [1], icon: nails  },
    { id: 3, name: "Hair Removal", types: [2, 3, 4], icon: waxing },
    { id: 4, name: "Face", types: [5, 6], icon: makeup },
    { id: 5, name: "Massage", types: [7], icon: massage },
    { id: 6, name: "Body", types: [8, 9], icon: body },
];
