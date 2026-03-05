export default function FirstVisitPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fairway Dental - First Visit</title>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700;900&amp;display=swap" rel="stylesheet"/>
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
                        "background-light": "#dfded9",
                        "background-dark": "#221610",
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen antialiased">
<div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 flex flex-1 justify-center py-5 sm:px-10 lg:px-40">
<div class="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
<!-- Header -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-300 dark:border-slate-700 px-4 py-4 sm:px-10">
<div class="flex items-center gap-4">
<div class="size-6 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">Fairway Dental</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-9">
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Home</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Us</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Services</a>
<a class="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-1" href="#">First Visit</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
<span class="truncate">Schedule Visit</span>
</button>
</div>
<!-- Mobile menu button -->
<div class="md:hidden flex items-center">
<span class="material-symbols-outlined text-2xl cursor-pointer">menu</span>
</div>
</header>
<!-- Hero Section -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4 sm:p-8 mt-4">
<div class="flex flex-col gap-2 max-w-2xl">
<h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">First Visit Expectations</h1>
<p class="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium leading-normal">Let's get to know each other</p>
</div>
<div class="flex gap-4">
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
<span class="material-symbols-outlined mr-2 text-xl">description</span>
<span class="truncate">Download Forms</span>
</button>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-md">
<span class="truncate">Schedule Your Visit</span>
</button>
</div>
</div>
<!-- Main Image & Intro -->
<div class="p-4 sm:p-8">
<div class="w-full bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-8 aspect-[21/9] md:aspect-[24/9] shadow-lg relative overflow-hidden" data-alt="Modern and welcoming dental reception area" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5zzPurP1C_4tOx0EN31iQS7Q5q0GxvpfGycWrO49nFa32pOzHcCCEHCIno3oFpwAER9atHi_3_ODy3K6OQQHhoaza4OIo3FI8WLdSOVCFC_b4KYL8H4mG2zjglZ-oFxKVoaYDAO3MgivHHe6MGT7OhJmyb_QIyhhMBJKoqAB382kTt_eCg0ibO3ISaFSs8iBsR9lQbBylJkcjls4wyBZJotjhWXvAOy49spcShcUcO7cLQREz08f4m0kd3orORarM_fItpFO--g");'>
<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<h2 class="text-white text-2xl md:text-3xl font-bold leading-tight relative z-10 w-full max-w-3xl">Welcome to Fairway Dental in Myrtle Beach</h2>
</div>
<div class="mt-8 bg-white dark:bg-slate-800 rounded-xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-700">
<p class="text-slate-700 dark:text-slate-300 text-lg font-normal leading-relaxed md:text-xl">
                                At Fairway Dental, we believe that knowing what lies ahead is the first step toward a positive and stress-free dental experience. Your first visit is all about getting to know you, understanding your oral health goals, and creating a personalized care plan that fits your lifestyle.
                            </p>
</div>
</div>
<!-- What to Expect Grid -->
<div class="flex flex-col gap-10 px-4 sm:px-8 py-10 @container">
<div class="flex flex-col gap-4 text-center items-center">
<h2 class="tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black max-w-[720px]">
                                What to Expect
                            </h2>
<p class="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
                                We want your first visit to be as comfortable and informative as possible. Here is a brief overview of what you can expect during your initial appointment.
                            </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
<!-- Card 1 -->
<div class="flex flex-col gap-4 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700 pb-6 group">
<div class="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" data-alt="Dentist performing a comprehensive examination" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXwpIOuIjoMbxblU_WuUOj0RqOLQfW244zAacLOco66fVAzZdE2qJEmp4kPOlydVox6GioG82eyV06nSN_fYUFnpu2BHloiljh-vRsxk8hUlpMu24tlyVhX5EKW7ZZMuxlUvbvjoNzB364Wzrk0aGl1iPu89RE5luYJI29VeCnCgGoQj4CxEQFi-J9c62cHbWKSQ7TH4hHvg155uhCqortc1N572xPdQKbRBA6glt8bAF1_fS1RuGTFu3TSfsNM7aDfmHMbs86OQ");'>
</div>
<div class="px-6 flex flex-col gap-2">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-2xl">health_and_safety</span>
<h3 class="text-xl font-bold leading-normal text-slate-900 dark:text-white">Comprehensive Exam</h3>
</div>
<p class="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
                                        A thorough examination of your teeth, gums, and overall oral health, including necessary digital X-rays to ensure we have a complete picture.
                                    </p>
</div>
</div>
<!-- Card 2 -->
<div class="flex flex-col gap-4 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700 pb-6 group">
<div class="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" data-alt="Dentist discussing treatment plan with a patient" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAH5bVtQcZz8xWtVFmFTdPvOU5S4BnFLeOgDEynDbnp8At2hkhlUBjpIhJmaSn5irfwEF3v1RJRqWwHhz4mePZQVE7TpUyw3r029aekWkEHcM-AgSKrhaAFLZe-LKFJtukclDz6D2HOYDp3xK6tsOGcJDLsWBacFQIMxIs3eavxyGCX3xb66HYnuRPWTaIeikFyjxHCi3VQWZuLbyhooacTbCaGk_RrHSWxsSXTfGx_trpWpjSYMvvKfY_vmEou5rgV_J-uEKjocw");'>
</div>
<div class="px-6 flex flex-col gap-2">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-2xl">assignment</span>
<h3 class="text-xl font-bold leading-normal text-slate-900 dark:text-white">Personalized Plan</h3>
</div>
<p class="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
                                        We will discuss our findings in detail and work closely with you to develop a customized treatment plan that meets your unique needs and budget.
                                    </p>
</div>
</div>
<!-- Card 3 -->
<div class="flex flex-col gap-4 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700 pb-6 group">
<div class="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" data-alt="Friendly dental staff ready to answer questions" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBlfrZa3SWOiwHtfI41gbqDrP6lc41MI0S7ZwuzrzwuzmK-MB06eZ_6VUoAxNN5F2sTSFaG9KzYSF4eo2ideRerpI0pZ1NtehgNSsWkk40m6rvJQdCvCuJgSl3CwEdn0CixuBvullPIdwBImHReUspBt88-dNSPxs8i1p7m0_FTE5qf38XzYgy9OcI7ozWIorXrT-cd77wbFvnUoHFOVux1PNhWraYIv0fP2bome_UY2RNpGkCNwO6zHq3_V7drpGUbjUX96ZhAg");'>
</div>
<div class="px-6 flex flex-col gap-2">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-2xl">forum</span>
<h3 class="text-xl font-bold leading-normal text-slate-900 dark:text-white">Questions Answered</h3>
</div>
<p class="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
                                        Our compassionate team will take the time to answer any questions you may have about your dental health, our services, or financing options.
                                    </p>
</div>
</div>
</div>
</div>
<!-- Bottom CTA Section -->
<div class="px-4 sm:px-8 py-12 mb-10">
<div class="bg-primary/10 dark:bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/20">
<div class="flex flex-col gap-3 max-w-xl text-center md:text-left">
<h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Ready for your first visit?</h3>
<p class="text-slate-600 dark:text-slate-400 text-lg">Download our new patient forms ahead of time to make your check-in process smooth and fast.</p>
</div>
<div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button class="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
<span class="material-symbols-outlined mr-2">download</span>
<span class="truncate">Patient Forms</span>
</button>
<button class="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-md">
<span class="material-symbols-outlined mr-2">calendar_month</span>
<span class="truncate">Book Appointment</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body></html>` }} />
  );
}