export default function BlogPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fairway Dental Oral Health Blog</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
            "display": ["Manrope"]
          },
          borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
        },
      },
    }
  </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col w-full max-w-[1440px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-4 mb-8">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="dentistry">dentistry</span>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">Fairway Dental</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-9">
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Services</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Testimonials</a>
<a class="text-primary text-sm font-medium leading-normal border-b-2 border-primary pb-1" href="#">Blog</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal hover:bg-orange-600 transition-colors">
<span class="truncate">Book Appointment</span>
</button>
</div>
</header>
<main class="px-10 pb-16">
<div class="flex flex-wrap justify-between gap-3 mb-8">
<div class="flex flex-col gap-2">
<h1 class="text-4xl font-black leading-tight tracking-[-0.033em]">Oral Health Blog</h1>
<p class="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal">Expert insights and tips for your dental care from Fairway Dental.</p>
</div>
</div>
<div class="flex gap-3 mb-8 flex-wrap">
<button class="flex h-10 shrink-0 items-center justify-center rounded-full bg-primary text-white px-6 transition-colors">
<span class="text-sm font-medium leading-normal">All</span>
</button>
<button class="flex h-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 px-6 transition-colors">
<span class="text-sm font-medium leading-normal">Bizarre Stories</span>
</button>
<button class="flex h-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 px-6 transition-colors">
<span class="text-sm font-medium leading-normal">Cosmetic Dentistry</span>
</button>
<button class="flex h-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 px-6 transition-colors">
<span class="text-sm font-medium leading-normal">Teeth Protection</span>
</button>
<button class="flex h-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 px-6 transition-colors">
<span class="text-sm font-medium leading-normal">Tooth Loss</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
<div class="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900 flex flex-col h-full">
<div class="aspect-video w-full bg-cover bg-center overflow-hidden relative">
<img alt="Person brushing teeth with charcoal toothpaste" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Person brushing teeth with charcoal toothpaste" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_4mCwROZBt-WiE1F_HCnr7vtnLxTgWHRG2q4y41zbsIflzxDtGpiugP-Q66ah-Dj4naxVUCh9x1cW5WNjo6rW74RghfDUTs8UeKcdYZxdUbhsvg9J7s07CgPx_diwh2aKKfCxAeVkdf7clP_c4psbyxbjGWg1-xI72_bZoFDlNxCU2s27G_eYCOQZbxpDRj4W_yP3qcael5L1cATE93nw7l0y7TIu69JJFw80ajkQwlroFeGyzVTwEt0cr_VRICmDRDzSYW9CoA"/>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="mb-3 flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
<span>January 23, 2019</span>
<span class="mx-2">•</span>
<span>Melisa Daveiga</span>
</div>
<h3 class="text-xl font-bold leading-tight mb-3 line-clamp-2">Bad Oral Health Fads: Charcoal Toothpaste</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">Is charcoal toothpaste really the secret to a brighter smile, or is it just a passing trend that could actually harm your enamel? We dive into the science behind this popular fad.</p>
<a class="inline-flex items-center text-primary font-bold text-sm hover:text-orange-600 transition-colors mt-auto" href="#">
                    Read More <span class="material-symbols-outlined text-sm ml-1" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<div class="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900 flex flex-col h-full">
<div class="aspect-video w-full bg-cover bg-center overflow-hidden relative">
<img alt="Close up of a perfect smile showing dental veneers" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Close up of a perfect smile showing dental veneers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_wZwZLr4fQkyFVHnbz6Jb5Hh_MXrHdXEDR_jEkQfynZBQPfbB-ergB6vXFX9H4OU00L4_o9UPeKYYNNwH7r7EAlcg7NbxzRCdv1l33E8tGgB5pm4M6ps_Cu2pvKr4De30XN3xwLZ_3Ll2Js23Gb0PZ0074Blbz6XSQt3_SppBjNHQo7oP6c1vdYgL9URlGgZZDuYndzQOTX3HC2qMtbeKJd1y4VdBq2oyg385pI4Kzilg7eUB3VDwIRg1J5ArBCi5cYdEZAIMJw"/>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="mb-3 flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
<span>February 14, 2019</span>
<span class="mx-2">•</span>
<span>Dr. Smith</span>
</div>
<h3 class="text-xl font-bold leading-tight mb-3 line-clamp-2">An Intro To Veneers</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">Everything you need to know about dental veneers. From the consultation process to the final results, discover how veneers can transform your smile and boost your confidence.</p>
<a class="inline-flex items-center text-primary font-bold text-sm hover:text-orange-600 transition-colors mt-auto" href="#">
                    Read More <span class="material-symbols-outlined text-sm ml-1" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<div class="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900 flex flex-col h-full">
<div class="aspect-video w-full bg-cover bg-center overflow-hidden relative">
<img alt="Person sleeping peacefully indicating good rest" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Person sleeping peacefully indicating good rest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVpWhMZlf8HvoLx30j6BLGe-GgHZBw1aGEee9Xn-_AobTHB48wDyqkt6Qk7PScLRW1CeoKugJshpjiAnBe36KtKTc6xK3c6Rnl4-WtzJOqJ8RhKqxHaeS3b-tcvzAx4OX6mlOvK1w9DIbWD2GEF456HhadOqbg4K53_7vKK5bxfGJMmjpYiZpJmkNLPwHjByuWXxn1ZX3VE8xsSWxFLvz7Nwno7D_PkzoRBJkLrge6iD8I4QO61ExVdhQw_PfmGu8_5MmGiKL2_A"/>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="mb-3 flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
<span>March 05, 2019</span>
<span class="mx-2">•</span>
<span>Melisa Daveiga</span>
</div>
<h3 class="text-xl font-bold leading-tight mb-3 line-clamp-2">Sleep Apnea And Dental Health</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">Did you know your dentist might be the first to spot signs of sleep apnea? Learn about the unexpected connection between your oral health and how well you sleep at night.</p>
<a class="inline-flex items-center text-primary font-bold text-sm hover:text-orange-600 transition-colors mt-auto" href="#">
                    Read More <span class="material-symbols-outlined text-sm ml-1" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<div class="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-slate-900 flex flex-col h-full">
<div class="aspect-video w-full bg-cover bg-center overflow-hidden relative">
<img alt="Glass of water representing healthy hydration" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Glass of water representing healthy hydration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6sSrtfJt3Ja5F_XS-Mx7tOrktYNYCf_C5NFtfnmXfyta2RNM3aC0DSfdUHBQt20bCVKMT8i8S5nBkCLbVmdRuKOxdoy6tShSb3H9cVDaVnKpVbie9VMjpMrKfLa2p2CgJ0dOhN3VHBe_xbodhERv0jthVVq7hB18RXdYJHGZ_2Y6J26gXSYizwhc_uhdtc0APvBfmLUwwP3JncRGsl9A7yRvZ9ClRUbCxJ8Ui79yOL3zH4W6GxZpbI8yYeyVVuGL07WMuZh62gg"/>
</div>
<div class="p-6 flex flex-col flex-1">
<div class="mb-3 flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
<span>April 12, 2019</span>
<span class="mx-2">•</span>
<span>Dr. Smith</span>
</div>
<h3 class="text-xl font-bold leading-tight mb-3 line-clamp-2">The Top 3 Best Drinks For Your Teeth</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">Not all beverages are created equal when it comes to your dental health. Find out which drinks help strengthen your enamel and keep your mouth hydrated.</p>
<a class="inline-flex items-center text-primary font-bold text-sm hover:text-orange-600 transition-colors mt-auto" href="#">
                    Read More <span class="material-symbols-outlined text-sm ml-1" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 lg:p-10 flex flex-col lg:flex-row gap-8 items-center border border-slate-100 dark:border-slate-800">
<div class="w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-[300px] rounded-lg overflow-hidden relative">
<img alt="Person brushing teeth with charcoal toothpaste" class="w-full h-full object-cover" data-alt="Person brushing teeth with charcoal toothpaste" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvJoB4ldxJaKHhHrysC12WgEMKSNmlOO5BvhIaRY2BrhM16NbKJMfDsJRlFSBmx7zgAIzkInwPoyAEEjhOsvHMZ9jJQmudzrpKH2mM08bKlXpSo6I9QE1OLq5U5z7PCzu0WqM8g35yrr7oVi2JNZ_vssFJ48fhWI7-1oVL2pJCYZQbhp8CqVNmVArfvbzQsvofRwPqcyiDdYGeGkOgM9ZHrsOcOnzq-eTyxLzcweA7xWyKZCXx4n2RsXNUaTLPvvX9FEMxSNALGQ"/>
</div>
<div class="w-full lg:w-1/2 flex flex-col justify-center">
<div class="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wide uppercase mb-4 w-max">Featured Article</div>
<h2 class="text-3xl font-bold leading-tight mb-4">Bad Oral Health Fads: Charcoal Toothpaste</h2>
<div class="mb-4 flex items-center text-sm text-slate-500 dark:text-slate-400 font-medium">
<span>January 23, 2019</span>
<span class="mx-2">•</span>
<span>Melisa Daveiga</span>
</div>
<p class="text-slate-600 dark:text-slate-400 text-base mb-8 leading-relaxed">
                  The internet is full of trends claiming to naturally whiten teeth overnight. One of the most popular recent fads is brushing with activated charcoal. While it might look cool on Instagram, dental professionals have growing concerns about its abrasiveness and lack of fluoride. We break down the real impact of charcoal toothpaste on your enamel and what you should be using instead for a safe, white smile.
                </p>
<button class="flex min-w-[120px] w-fit cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-orange-600 transition-colors shadow-sm">
<span>Read Full Article</span>
</button>
</div>
</div>
</main>
<footer class="mt-auto border-t border-slate-200 dark:border-slate-800 py-8 px-10 text-center text-slate-500 dark:text-slate-400 text-sm">
<p>© 2023 Fairway Dental. All rights reserved.</p>
</footer>
</div>
</div>
</div>
</div>
</body></html>` }} />
  );
}