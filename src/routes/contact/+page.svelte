<!-- <svelte:head>
  <title>Contact</title>
</svelte:head> -->

<h1>Contact</h1>
    <label><i>(Do not email me please. This email will not find me well.)</i></label>
    
    <form action="mailto:dummyemail@hotmale.com" enctype="text/plain">
        <p>
            <label>Your email address:<br>
                <input type="email" name="email" required>
            </label>
        </p>
        <p>
            <label>Subject:<br>
                <input type="text" name="subject" required>
            </label>
        </p>
        <p>
            <label>Message:<br>
                <textarea name="body" required></textarea>
            </label>
        </p>
        <p>
            <button>Send at your peril</button>
        </p>
    </form>