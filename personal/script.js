<script>
    // Clean, professional greeting logic
    const updateHeader = () => {
        const hr = new Date().getHours();
        const greetingElement = document.getElementById('greeting');
        let text = "Sourajeet";
        
        if (hr < 12) text = "Good Morning";
        else if (hr < 18) text = "Good Afternoon";
        else text = "Good Evening";
        
        greetingElement.innerHTML = `${text} <span class="green">Banerjee</span>`;
    };

    window.onload = updateHeader;
</script>