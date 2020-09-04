new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {

        // Grabs the section number (1,2,3) of the current section that we have just scrolled passed
        const section = destination.item;

        // Grabs the h1 title for the section that we have just scrolled passed
        const title = section.querySelector('h1');

        const tl = new TimelineMax({delay: 0.3});

        // Animates title (h1) of each section to make it slide-up into view
        tl.fromTo(title, 0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});

        // Specifies animations on specific pages. In this case, we want to only apply the animation to
        // the page with index === 1 i.e. the first page after the landing page.
        if (destination.index === 1) {
            const chairs = document.querySelectorAll('.chair');
            const description = document.querySelectorAll('.description');

            tl.fromTo(chairs, 0.7, {x: '100%'}, {x: '-35%'})
            // Dont close the above line with semicolons ;
            // We can chain more animations in :
            .fromTo(description, 0.5, {y: "50", opacity:0}, {y:0, opacity: 1})
            .fromTo(chairs[0], 1, {opacity: 1}, {opacity: 1})
            .fromTo(chairs[1], 1, {opacity: 0}, {opacity: 1})
            .fromTo(chairs[2], 1, {opacity: 0}, {opacity: 1})

        }

    }

});