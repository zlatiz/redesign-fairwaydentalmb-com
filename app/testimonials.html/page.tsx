export default function TestimonialsPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fairway Dental Testimonials Page</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
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
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-4 max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
<div class="size-6 text-primary">
<span class="material-symbols-outlined !text-2xl">dentistry</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">Fairway Dental</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-9">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
<a class="text-sm font-medium text-primary" href="#">Testimonials</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
<span class="truncate">Book Appointment</span>
</button>
</div>
</header>
<main class="flex-1 w-full max-w-[1440px] mx-auto px-10 py-12">
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
<div class="flex flex-col gap-3">
<h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Patient Reviews</h1>
<p class="text-slate-600 dark:text-slate-400 text-lg font-medium">Call us at (843) 839-9552 to schedule your next visit.</p>
</div>
<button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
<span class="truncate">Write a Review</span>
</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[300px_1fr] gap-12 mb-16">
<div class="flex flex-col gap-8 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 h-fit">
<div class="flex flex-col gap-2 text-center">
<p class="text-6xl font-black leading-tight tracking-[-0.033em]">4.9</p>
<div class="flex justify-center gap-1 text-primary">
<span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-2xl">star_half</span>
</div>
<p class="text-slate-600 dark:text-slate-400 text-base font-medium mt-1">Based on 342 reviews</p>
</div>
<div class="flex flex-col gap-3">
<div class="grid grid-cols-[20px_1fr_40px] items-center gap-3">
<p class="text-sm font-medium">5</p>
<div class="flex h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
<div class="rounded-full bg-primary" style="width: 92%;"></div>
</div>
<p class="text-slate-500 text-sm font-medium text-right">92%</p>
</div>
<div class="grid grid-cols-[20px_1fr_40px] items-center gap-3">
<p class="text-sm font-medium">4</p>
<div class="flex h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
<div class="rounded-full bg-primary" style="width: 5%;"></div>
</div>
<p class="text-slate-500 text-sm font-medium text-right">5%</p>
</div>
<div class="grid grid-cols-[20px_1fr_40px] items-center gap-3">
<p class="text-sm font-medium">3</p>
<div class="flex h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
<div class="rounded-full bg-primary" style="width: 2%;"></div>
</div>
<p class="text-slate-500 text-sm font-medium text-right">2%</p>
</div>
<div class="grid grid-cols-[20px_1fr_40px] items-center gap-3">
<p class="text-sm font-medium">2</p>
<div class="flex h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
<div class="rounded-full bg-primary" style="width: 0%;"></div>
</div>
<p class="text-slate-500 text-sm font-medium text-right">0%</p>
</div>
<div class="grid grid-cols-[20px_1fr_40px] items-center gap-3">
<p class="text-sm font-medium">1</p>
<div class="flex h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
<div class="rounded-full bg-primary" style="width: 1%;"></div>
</div>
<p class="text-slate-500 text-sm font-medium text-right">1%</p>
</div>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
<div class="flex flex-col gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="bg-slate-200 dark:bg-slate-700 rounded-full size-12 flex items-center justify-center text-xl font-bold text-slate-500">
                                    SJ
                                </div>
<div class="flex-1">
<p class="text-lg font-bold">Sarah Jenkins</p>
<p class="text-slate-500 text-sm">2 days ago</p>
</div>
</div>
<div class="flex gap-1 text-primary">
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                                Absolutely the best dental experience I've ever had. The staff is so welcoming and Dr. Fairway is incredibly gentle. I highly recommend them to anyone in Myrtle Beach!
                            </p>
<div class="flex gap-6 text-slate-500 mt-2">
<button class="flex items-center gap-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_up</span>
<span class="text-sm font-medium">14</span>
</button>
<button class="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_down</span>
</button>
</div>
</div>
<div class="flex flex-col gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="bg-slate-200 dark:bg-slate-700 rounded-full size-12 flex items-center justify-center text-xl font-bold text-slate-500">
                                    MT
                                </div>
<div class="flex-1">
<p class="text-lg font-bold">Michael Thompson</p>
<p class="text-slate-500 text-sm">1 week ago</p>
</div>
</div>
<div class="flex gap-1 text-primary">
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                                I recently moved here and was dreading finding a new dentist. Fairway Dental exceeded all my expectations. Clean office, modern equipment, and friendly team.
                            </p>
<div class="flex gap-6 text-slate-500 mt-2">
<button class="flex items-center gap-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_up</span>
<span class="text-sm font-medium">8</span>
</button>
<button class="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_down</span>
</button>
</div>
</div>
<div class="flex flex-col gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="bg-slate-200 dark:bg-slate-700 rounded-full size-12 flex items-center justify-center text-xl font-bold text-slate-500">
                                    ER
                                </div>
<div class="flex-1">
<p class="text-lg font-bold">Emily Rodriguez</p>
<p class="text-slate-500 text-sm">2 weeks ago</p>
</div>
</div>
<div class="flex gap-1 text-primary">
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                                Got my teeth whitened here before my wedding. The results are fantastic and the team made sure I was comfortable the entire time.
                            </p>
<div class="flex gap-6 text-slate-500 mt-2">
<button class="flex items-center gap-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_up</span>
<span class="text-sm font-medium">5</span>
</button>
<button class="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_down</span>
</button>
</div>
</div>
<div class="flex flex-col gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-4">
<div class="bg-slate-200 dark:bg-slate-700 rounded-full size-12 flex items-center justify-center text-xl font-bold text-slate-500">
                                    DC
                                </div>
<div class="flex-1">
<p class="text-lg font-bold">David Chen</p>
<p class="text-slate-500 text-sm">1 month ago</p>
</div>
</div>
<div class="flex gap-1 text-primary">
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined !text-xl" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                                Professional, efficient, and transparent about pricing. They explained my treatment plan clearly without any pressure. Five stars.
                            </p>
<div class="flex gap-6 text-slate-500 mt-2">
<button class="flex items-center gap-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_up</span>
<span class="text-sm font-medium">12</span>
</button>
<button class="flex items-center gap-2 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
<span class="material-symbols-outlined !text-xl">thumb_down</span>
<span class="text-sm font-medium">1</span>
</button>
</div>
</div>
</div>
</div>
<div class="bg-primary/10 dark:bg-primary/5 rounded-2xl p-10 md:p-16 text-center flex flex-col items-center gap-6 mt-12 border border-primary/20">
<h2 class="text-3xl md:text-4xl font-black leading-tight">Share Your Smile</h2>
<p class="text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
                        Your feedback helps us continue providing the best dental care in Myrtle Beach. Leave us a review on Google!
                    </p>
<button class="mt-4 flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors shadow-sm">
<span class="material-symbols-outlined">rate_review</span>
<span>Leave a Google Review</span>
</button>
</div>
</main>
<footer class="border-t border-slate-200 dark:border-slate-800 py-8 px-10 text-center text-slate-500 text-sm mt-auto">
<p>© 2024 Fairway Dental. All rights reserved.</p>
</footer>
</div>
</div>
</body></html>` }} />
  );
}