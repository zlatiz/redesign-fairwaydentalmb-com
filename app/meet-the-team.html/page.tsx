export default function MeetTheTeamPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fairway Dental - Meet the Team</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f26e2c",
                        "background-light": "#dfded9",
                        "background-dark": "#221610",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col antialiased">
<div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<header class="flex items-center justify-between whitespace-nowrap border-b border-primary/20 px-10 py-4 bg-background-light/90 dark:bg-background-dark/90 sticky top-0 z-50 backdrop-blur-md">
<div class="flex items-center gap-4 text-primary">
<span class="material-symbols-outlined text-3xl">dentistry</span>
<h2 class="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Fairway Dental</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="hidden md:flex items-center gap-8">
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Home</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">About Us</a>
<a class="text-primary font-bold text-sm leading-normal border-b-2 border-primary pb-1" href="#">Meet the Team</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Services</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Contact</a>
</nav>
<button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-wide shadow-sm">
                    Book Appointment
                </button>
</div>
</header>
<main class="flex-1 max-w-6xl mx-auto w-full px-6 py-12 flex flex-col gap-12">
<div class="flex flex-col gap-4 text-center items-center py-8">
<h1 class="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-3xl">
                    Meet Our Myrtle Beach Dental Team
                </h1>
<div class="h-1 w-24 bg-primary rounded-full mt-2 opacity-80"></div>
<p class="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-lg">
                    Committed to providing exceptional dental care in a warm and welcoming environment. Get to know the professionals behind your smile.
                </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
<div class="w-full sm:w-48 h-64 sm:h-auto rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 bg-cover bg-center" data-alt="Portrait of Kelly Brink, Dental Hygienist" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx9nJV91MIv7fOkalF4NlW_2-7vwWMZnV8UeiZlkg7e3nTNVaY9Utkv5z4kM05u34OpdnDIi5QpDyFxkcct34Xzv_0KqhjVK4HUaRB7nO3CTvKlk6AHkr9weM8n8D4pE8CRPsLa-MUtWTsKueoNyii8PKl99_Gsgee8fPjliXTeReb09P1krkhojzyLO6xcniUcSBddvYyoFr6SSATKEeL1zb0MWq2SWC8Co2byoLOXT4M7q1DAn3UnwYPwH8sRpoNLUMUu78j0A');">
</div>
<div class="flex flex-col justify-center flex-1">
<h3 class="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-1">Kelly Brink</h3>
<p class="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Dental Hygienist</p>
<p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            Kelly grew up in Fort Collins, Colorado and moved to Myrtle Beach in 2015. She loves helping patients achieve their best smiles and ensuring they feel comfortable during every visit. In her free time, she enjoys walking on the beach and spending time with her family.
                        </p>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
<div class="w-full sm:w-48 h-64 sm:h-auto rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 bg-cover bg-center" data-alt="Portrait of Dr. John Doe, Dentist" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTmU-HCk1F6uXRdN74xFiPe3kn886nR1KTBdXKa720Rjwek_rZg4fcYAOgQAF1t57qxECFgFtzNEsG7RhZNT6i2ZeIE1iynCeG62YbXehm4m-TDA9uhxBuoorJxBq1XVH2fEVux-M3MMMzdKgZTkfGFWf2xU3pfrYuD8_sitPn8WDVsZeMC5B_Y5KCQDxg0G2mhMQjnr2Fn9pGQLBE-FXx9shT8ZWYqlmBjOCw7ntyzflQBX-Kyl8vTvZ4X7pzYVd5az93M_ATAQ');">
</div>
<div class="flex flex-col justify-center flex-1">
<h3 class="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-1">Dr. John Doe</h3>
<p class="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Lead Dentist</p>
<p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            John has been practicing dentistry for 10 years, specializing in cosmetic and restorative procedures. He is passionate about continuous learning and staying updated with the latest dental technologies to provide top-tier care to all his patients.
                        </p>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
<div class="w-full sm:w-48 h-64 sm:h-auto rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 bg-cover bg-center" data-alt="Portrait of Sarah Jenkins, Dental Assistant" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAdDp1SfgoDxWmLaoDZp7bmMUTX7QdVn99kPtzccOOQ4R5iWJMh7OsIvRXkf0CpJrz86z8zqnP3jex4vvISJweCsAd9l67exAdPJt4FVsz7XaUEJwb7-oGsxRsGbuwFKkT4VWf1Xba3hsibm7xxX4PTRU5b7FDrPAxh-4cvbPFNtJuWXxmFSGwZ7_CnasbmAojAiGBIg1jPXRYN-9ncXqCcD84bTwFoCgKoDIFpVUk_dKqLar7o32qyIssk5qPDoP-cjKMIrbl7Q');">
</div>
<div class="flex flex-col justify-center flex-1">
<h3 class="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-1">Sarah Jenkins</h3>
<p class="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Dental Assistant</p>
<p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            Sarah has been a key part of our team for over five years. Her calming presence helps anxious patients feel at ease. She assists Dr. Doe in various procedures and ensures the clinic runs smoothly on a day-to-day basis.
                        </p>
</div>
</div>
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
<div class="w-full sm:w-48 h-64 sm:h-auto rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0 bg-cover bg-center" data-alt="Portrait of Emily Chen, Office Manager" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAB10REOHAI5Nw9_mH7dKySUVkk4USXHYlRr5MhujzZRX4pjPmvE-dMll4SXSYV1pBC2faXbn4_ImLfHtU6Thcv26aUHkz9R-bQpLc0V8CU91-Z5IeHi6w44MGNtIxZkLVkAvveG-kAIYZiJ-CtElzmIR3iaQdgKKSJuZGPuheLOj-_9ZIZfBlLJ2DWROSBBL0LzEg4rTumSbIQaZiRM9CbdW4oEL2GnpLJEUSikg87mA--HMIbQwx0hrkk9i3-95FN7cIQ6f0now');">
</div>
<div class="flex flex-col justify-center flex-1">
<h3 class="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-1">Emily Chen</h3>
<p class="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Office Manager</p>
<p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            Emily is the friendly face that greets you when you walk in. She handles scheduling, insurance inquiries, and ensures that every patient's administrative experience is as painless as their dental treatments.
                        </p>
</div>
</div>
</div>
</main>
<footer class="mt-auto border-t border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-black/20">
<div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div class="flex items-center gap-2 text-slate-800 dark:text-slate-200">
<span class="material-symbols-outlined text-primary">dentistry</span>
<span class="font-bold">Fairway Dental</span>
</div>
<div class="flex flex-wrap items-center justify-center gap-8">
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm font-medium transition-colors" href="#">Privacy Policy</a>
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm font-medium transition-colors" href="#">Terms of Service</a>
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm font-medium transition-colors" href="#">Contact Us</a>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm">© 2023 Fairway Dental. All rights reserved.</p>
</div>
</footer>
</div>
</div>
</body></html>` }} />
  );
}