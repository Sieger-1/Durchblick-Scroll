

gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

/*gsap.fromTo('.bild-2',

    {
        opacity: 0
},


    {
    opacity: 1,
    ease: "none",
    scrollTrigger:{
        trigger: '.scroll-bereich',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    }
}); */


/*gsap.fromTo('.bild-2', 
  { 
    opacity: 0, 
    scale: 1.1 // Startet leicht herangezoomt
  }, 
  {
    opacity: 1, 
    scale: 1,  // Zoomt auf Normalgröße zurück
    ease: "none",
    scrollTrigger: {
      trigger: '.scroll-bereich',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    }
  }
); */


/*gsap.fromTo('.bild-2',
    {
        opacity:1,
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'

    },
    {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
    ease: "none",
    scrollTrigger: {
      trigger: '.scroll-bereich',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    }
    }
)*/

/*gsap.fromTo('.bild-2',
    {
        opacity:1,
        clipPath: 'circle(0% at -20% 50%)'

    },
    {
        clipPath: 'circle(40% at 100% 50%)', 
    ease: "power1.out",
    scrollTrigger: {
    trigger: '.scroll-bereich',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
    }
    }) */

const tl = gsap.timeline({
    scrollTrigger: {

        trigger: '.scroll-bereich',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        snap: {
            snapTo: "labels",
            duration: {min: 0.4, max: 1},
            delay: 0.1,
            ease: "steps.in"
        }
    }
});


const radius = 15;

const p1_x = 30;
const p1_y = 30;

const p2_x= 45;
const p2_y = 65;

const p3_x = 75;
const p3_y = 15;


let mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {

    gsap.set('.popup', { xPercent: -40, yPercent: -50 });

gsap.set('.popup-1', { left: `${p1_x}%`, top: `${p1_y}%` });
gsap.set('.popup-2', { left: `${p2_x}%`, top: `${p2_y}%` });
gsap.set('.popup-3', { left: `${p3_x}%`, top: `${p3_y}%` });
gsap.set('.weiterscrollen', {xPercent: -50, left: "50%", top: "80%"});
})

mm.add("max-width: 768px", () =>{
    
})




// Startet außerhalb und geht zum ersten Punkt

tl.add('start')

tl.fromTo('.bild-2',
    {clipPath: 'circle(15% at -20% 50%)', opacity: 1},
    {clipPath: `circle(${radius}% at ${p1_x}% ${p1_y}%)`, ease: "power1.inOut", duration: 2}
)




.to('.weiterscrollen',{
    opacity: 0,
    scale: 0.5,
    duration: 1.5
}, "<")



.to('.popup-1',{
    opacity: 1,
    scale: 1,
    duration: 0.5
})


.to('.bild-2',
    {clipPath: `circle(${radius}% at ${p1_x+2}% ${p1_y}%)`, ease: "power2.inOut", duration: 2}
)

.add('punkt-1')


.to('.popup-1',{
    opacity: 0,
    scale: 0.5,
    duration: 0.5
})

// Punkt 2

.to('.bild-2',
    {clipPath: `circle(${radius}% at ${p2_x}% ${p2_y}%)`, ease: "power1.inOut", duration: 2}
)



.to('.popup-2',{
    opacity: 1,
    scale: 1,
    duration: 0.5
})


.to('.bild-2',
    {clipPath: `circle(${radius}% at ${p2_x+2}% ${p2_y}%)`, ease: "power1.inOut", duration: 3}
)
.add('punkt-2')

.to('.popup-2',{
    opacity: 0,
    scale: 0.5,
    duration: 0.5
})

// Punkt 3


.to('.bild-2',
    {clipPath: `circle(${radius}% at ${p3_x}% ${p3_y}%)`, ease: "power1.inOut", duration: 2}
)



.to('.popup-3',{
    opacity: 1,
    scale: 1,
    duration: 0.5
})



.to('.bild-2',
    {clipPath: `circle(${radius}% at ${p3_x+2}% ${p3_y}%)`, ease: "power1.inOut", duration: 3}
)

.add('punkt-3')
.to('.popup-3',{
    opacity: 0,
    scale: 0.5,
    duration: 0.5
})



// Ende

.add('ende')

.to('.bild-2',
    {clipPath: 'circle(100% at 50% 50%)', ease: "power1.inOut", duration: 1.5}
); 

