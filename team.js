$(document).ready(function() {
    // Ketika pengguna mengetik di search bar
    $('.search-bar input').on('keyup', function() {
        // Ambil nilai input dan konversi menjadi lowercase
        let searchTerm = $(this).val().toLowerCase();

        // Loop melalui setiap team-card
        $('.team-card').each(function() {
            // Ambil nama depan dan nama belakang dari team-card
            let firstName = $(this).find('h2').text().toLowerCase();
            let lastName = $(this).find('h1').text().toLowerCase();

            // Jika nama depan atau nama belakang mengandung kata yang dicari, tampilkan team-card tersebut
            if (firstName.includes(searchTerm) || lastName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

$(document).ready(function() {
    // Data for team members
    const teamMembers = [
        { firstName: "KEVIN", lastName: "REINHARD", category: "tata-ibadah", link: "#" },
        { firstName: "FELIX", lastName: "NATHANAEL", category: "tata-ibadah", link: "#" },
        { firstName: "ALFIAN", lastName: "EFFENDI", category: "tata-ibadah", link: "#" },
        { firstName: "NIKO", lastName: "ENSI", category: "tata-ibadah", link: "#" },
        { firstName: "MISEL", lastName: "KHO", category: "tata-ibadah", link: "#" },
        { firstName: "MARSELA", lastName: "SUBANDI", category: "tata-ibadah", link: "#" },
        { firstName: "MARSEL", lastName: "SUBADI", category: "tata-ibadah", link: "#" },
        { firstName: "JEKLIN", lastName: "SUBADI", category: "tata-ibadah", link: "#" }
        // Add more team members as needed
    ];

    let currentIndex = 0;
    const visibleCards = 3; // Number of cards visible at a time

    // Function to display team cards
    function renderTeamCards(startIndex) {
        // Clear the team container
        $('.team-container').empty();

        // Display the next set of cards based on startIndex
        const endIndex = startIndex + visibleCards;
        const visibleMembers = teamMembers.slice(startIndex, endIndex);

        visibleMembers.forEach(member => {
            const cardHTML = `
                <div class="team-card" onclick="window.location.href='${member.link}'">
                    <h2>${member.firstName}</h2>
                    <h1>${member.lastName}</h1>
                    <div class="team-image"></div>
                </div>
            `;
            $('.team-container').append(cardHTML);
        });

        // Handle arrow visibility
        handleArrowVisibility(startIndex);
    }

    // Handle visibility of arrows based on current index
    function handleArrowVisibility(index) {
        if (index === 0) {
            $('.carousel-arrow.left').hide();
        } else {
            $('.carousel-arrow.left').show();
        }

        if (index + visibleCards >= teamMembers.length) {
            $('.carousel-arrow.right').hide();
        } else {
            $('.carousel-arrow.right').show();
        }
    }

    // Event listeners for carousel arrows
    $('.carousel-arrow.right').click(function() {
        if (currentIndex + visibleCards < teamMembers.length) {
            currentIndex += visibleCards;
            renderTeamCards(currentIndex);
        }
    });

    $('.carousel-arrow.left').click(function() {
        if (currentIndex - visibleCards >= 0) {
            currentIndex -= visibleCards;
            renderTeamCards(currentIndex);
        }
    });

    // Search function
    $('#team-search').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        currentIndex = 0; // Reset index to 0 when searching
        const filteredTeam = teamMembers.filter(member => 
            member.firstName.toLowerCase().includes(searchTerm) ||
            member.lastName.toLowerCase().includes(searchTerm)
        );

        // Render only the filtered results
        if (filteredTeam.length > 0) {
            renderFilteredTeam(filteredTeam, currentIndex);
        } else {
            $('.team-container').empty().append('<p>No results found.</p>');
        }
    });

    // Render filtered team for search
    function renderFilteredTeam(filteredTeam, startIndex) {
        $('.team-container').empty();
        const endIndex = startIndex + visibleCards;
        const visibleMembers = filteredTeam.slice(startIndex, endIndex);

        visibleMembers.forEach(member => {
            const cardHTML = `
                <div class="team-card" onclick="window.location.href='${member.link}'">
                    <h2>${member.firstName}</h2>
                    <h1>${member.lastName}</h1>
                    <div class="team-image"></div>
                </div>
            `;
            $('.team-container').append(cardHTML);
        });

        // Update carousel arrow behavior
        handleFilteredArrowVisibility(startIndex, filteredTeam);
    }

    // Arrow visibility for filtered team
    function handleFilteredArrowVisibility(index, filteredTeam) {
        if (index === 0) {
            $('.carousel-arrow.left').hide();
        } else {
            $('.carousel-arrow.left').show();
        }

        if (index + visibleCards >= filteredTeam.length) {
            $('.carousel-arrow.right').hide();
        } else {
            $('.carousel-arrow.right').show();
        }
    }

    // Initialize first display of team cards
    renderTeamCards(currentIndex);
});

