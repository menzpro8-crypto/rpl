// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const body = document.body;

    // Toggle sidebar when hamburger menu is clicked
    navToggle.addEventListener('change', function() {
        if (this.checked) {
            openSidebar();
        } else {
            closeSidebar();
        }
    });

    // Close sidebar when clicking on overlay
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeSidebar();
        });
    }

    // Close sidebar when clicking on sidebar links (mobile)
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    function openSidebar() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeSidebar() {
        navToggle.checked = false;
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
    }

    // Close sidebar on window resize if it becomes desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });
});
