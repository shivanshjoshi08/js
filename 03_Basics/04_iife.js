// Immediately Invoked Function Expression(IIFE)

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();


((name) => {
    // Benaam IIFE
    console.log(`DB Connected Two ${name}`);
})('Shivansh')