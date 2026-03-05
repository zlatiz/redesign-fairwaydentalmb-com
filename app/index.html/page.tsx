export default function HomePage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fairway Dental Home Inner Page</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#f26e2c",
                        "background-light": "#f8f6f5",
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
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200 antialiased">
<div class="relative flex min-h-screen flex-col overflow-x-hidden">
<header class="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-6 py-4 lg:px-12">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-3xl">dentistry</span>
<span class="text-xl font-bold tracking-tight">Fairway Dental</span>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Patient Resources</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden md:flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md shadow-primary/20">
                    Schedule Visit
                </button>
<button class="md:hidden p-2 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main class="flex-1 flex flex-col">
<section class="relative flex min-h-[60vh] lg:min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20 lg:px-12">
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-gradient-to-r from-background-dark/80 to-background-dark/40 z-10"></div>
<img alt="Dr. Latham in a professional clinical setting" class="w-full h-full object-cover" data-alt="Professional clinical dental office interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCk1J2MsUfr6RyBeiFnY8qmiLXqHk3Fu2ty5SskKwz3j-NILK7QLJO2Mx5L7ET-bTiMtBt8T5jU-71io0AZs5S_E6pLYu3T_Dp8JJAeOq6i30gdEkeWjYAql6U18IC0DFufMomhdeIS6svTcC5l4dNC24LyQZWKQe2ogsXgAoiTr_AI7uao5ptSPUzo19aq6fA7efEL83VfJqXKYONWo6lbI9p6oEvZdNettKYcFnZ15zkeE9aIYwUO8pxrKccDpD7Qa58UVwkJw"/>
</div>
<div class="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto gap-6 animate-fade-in-up">
<h1 class="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                        Fairway Dental
                    </h1>
<p class="text-lg lg:text-2xl text-slate-200 font-light max-w-2xl">
                        Myrtle Beach SC Family Dentist
                    </p>
<div class="mt-4 flex flex-col sm:flex-row gap-4">
<button class="flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg shadow-primary/30">
                            Schedule Your Visit
                        </button>
<button class="flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/20">
                            Our Services
                        </button>
</div>
</div>
</section>
<section class="px-6 py-20 lg:px-12 max-w-7xl mx-auto w-full">
<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div class="flex flex-col gap-8 order-2 lg:order-1">
<div class="space-y-4">
<h2 class="text-sm font-bold text-primary tracking-widest uppercase">Meet the Doctor</h2>
<h3 class="text-3xl lg:text-5xl font-black leading-tight tracking-tight">
                                Get to know Dr. Latham
                            </h3>
</div>
<div class="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
<p>
                                Welcome to Fairway Dental. I am Dr. Latham, your dedicated family dentist in Myrtle Beach, committed to providing top-quality dental care with a gentle touch.
                            </p>
<p>
                                With over 15 years of experience in comprehensive dentistry, our team focuses on creating a comfortable, anxiety-free environment for patients of all ages. We believe in proactive care and patient education as the foundation for lifelong oral health.
                            </p>
</div>
<div class="pt-4 flex items-center gap-6">
<button class="flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-bold text-white transition-transform hover:-translate-y-1 shadow-md shadow-primary/20">
                                Read More
                                <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
</button>
</div>
<div class="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
<div class="flex flex-col gap-2">
<span class="material-symbols-outlined text-primary text-3xl">verified</span>
<h4 class="font-bold text-lg">Professional Care</h4>
<p class="text-sm text-slate-500 dark:text-slate-400">Years of experience and a passion for oral health.</p>
</div>
<div class="flex flex-col gap-2">
<span class="material-symbols-outlined text-primary text-3xl">family_restroom</span>
<h4 class="font-bold text-lg">Family Friendly</h4>
<p class="text-sm text-slate-500 dark:text-slate-400">Welcoming environment for patients of all ages.</p>
</div>
</div>
</div>
<div class="relative order-1 lg:order-2 group">
<div class="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
<div class="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
<img alt="Portrait of Dr. Latham" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Male dentist smiling in professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMHokOGbhx6HGv3q4rKmYLtGPJPsJkxZ_LVRt6SmgOivZxTQnjF6ebVTiPL2MsAGVqL6ip0mY5OX4485eTIr2-2YGjmT0qBJ_O_ziymp7IC34-9WtAhN7g4ScduRI4ddaCO2u7pm0NMI14S2YGbTe_WRBQUxAaWQjoR0mrsB64mF1SB5UODayHaUIWyya47MB8YSrbdT9LWtsGz_V7JcvbjpAaweVx1D9qXSfgQXjynIQjVftDlvsHLV7VrVVw4gD0ucbEWjtYuw"/>
</div>
</div>
</div>
</section>
<section class="bg-primary/5 dark:bg-primary/10 px-6 py-20 lg:px-12 border-y border-primary/10">
<div class="max-w-7xl mx-auto text-center space-y-8">
<h3 class="text-2xl lg:text-3xl font-bold">Ready for a brighter smile?</h3>
<p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Join our dental family today and experience the difference of personalized, compassionate care.</p>
<button class="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg shadow-primary/30">
                        Schedule an Appointment
                    </button>
</div>
</section>
</main>
<footer class="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6 lg:px-12 mt-auto">
<div class="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 text-center">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-primary text-3xl">dentistry</span>
<span class="text-xl font-bold">Fairway Dental</span>
</div>
<div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-600 dark:text-slate-400">
<a class="flex items-center gap-2 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">location_on</span>
<span>123 Main St, Myrtle Beach, SC</span>
</a>
<a class="flex items-center gap-2 hover:text-primary transition-colors" href="tel:5551234567">
<span class="material-symbols-outlined text-[20px]">phone</span>
<span>(555) 123-4567</span>
</a>
<a class="flex items-center gap-2 hover:text-primary transition-colors" href="mailto:info@fairwaydental.com">
<span class="material-symbols-outlined text-[20px]">mail</span>
<span>info@fairwaydental.com</span>
</a>
</div>
<div class="w-full h-px bg-slate-200 dark:bg-slate-800 my-4 max-w-3xl"></div>
<div class="flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl text-sm text-slate-500">
<p>© 2023 Fairway Dental. All rights reserved.</p>
<a class="flex items-center gap-1 hover:text-primary transition-colors mt-4 sm:mt-0 font-medium" href="#">
<span>Back To Top</span>
<span class="material-symbols-outlined text-[18px]">arrow_upward</span>
</a>
</div>
</div>
</footer>
</div>
</body></html>` }} />
  );
}