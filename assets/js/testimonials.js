
const testimonials = [
    {
        name: "Roberto Díaz",
        testimonial:
            "Event Planners es una empresa excepcional con la que tuve la oportunidad de trabajar. Los profesionales que maneja esta empresa son muy creativos, trabajan con entusiasmo y siempre entregan excelentes resultados. Muchas gracias por haber hecho el sueño de mi hija realidad."
    },
    {
        name: "Samantha Quintero",
        testimonial:
            "Angie y Laura solo tengo agradecimiento hacia ustedes, todo salió como lo imaginaba. Sin duda alguna las volvería a elegir una y mil veces."
    }
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
    i = (j + i + 1) % j;
    displayTestimonial();
}

function prev() {
    i = (j + i - 1) % j;
    displayTestimonial();
}
let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
        <h3>${testimonials[i].name}</h3>
        `;
};
window.onload = displayTestimonial;