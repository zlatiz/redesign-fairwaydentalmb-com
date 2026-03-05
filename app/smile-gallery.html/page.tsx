export default function SmileGalleryPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Fairway Dental - Smile Gallery</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
<div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full">
<!-- Header -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 dark:border-primary/10 px-4 sm:px-10 py-4 mb-8">
<div class="flex items-center gap-4 text-slate-900 dark:text-slate-100">
<div class="size-6 text-primary">
<span class="material-symbols-outlined text-[24px]">dentistry</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">Fairway Dental</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Home</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">About Us</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Services</a>
<a class="text-primary text-sm font-medium leading-normal" href="#">Smile Gallery</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Contact</a>
</div>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Book Appointment</span>
</button>
</div>
<div class="md:hidden flex items-center">
<button class="text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<!-- Page Title -->
<div class="flex flex-col gap-3 p-4 mb-6">
<h1 class="text-4xl font-black leading-tight tracking-[-0.033em]">Smile Gallery</h1>
<p class="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">
                            Real results from our Myrtle Beach clinic. See the transformative power of modern dentistry through our patient case studies.
                        </p>
</div>
<!-- Category Tabs -->
<div class="pb-8 mb-8">
<div class="flex border-b border-primary/20 dark:border-primary/10 px-4 gap-8 overflow-x-auto">
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4 whitespace-nowrap" href="#">
<p class="text-sm font-bold leading-normal tracking-[0.015em]">Upper Teeth</p>
</a>
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-[13px] pt-4 whitespace-nowrap transition-colors" href="#">
<p class="text-sm font-bold leading-normal tracking-[0.015em]">Lower Teeth</p>
</a>
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-[13px] pt-4 whitespace-nowrap transition-colors" href="#">
<p class="text-sm font-bold leading-normal tracking-[0.015em]">Full Mouth Restoration</p>
</a>
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-[13px] pt-4 whitespace-nowrap transition-colors" href="#">
<p class="text-sm font-bold leading-normal tracking-[0.015em]">Invisalign</p>
</a>
<a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 pb-[13px] pt-4 whitespace-nowrap transition-colors" href="#">
<p class="text-sm font-bold leading-normal tracking-[0.015em]">Veneers</p>
</a>
</div>
</div>
<h2 class="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6">Upper Teeth Case Studies</h2>
<!-- Gallery Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mb-16">
<!-- Case Study 1 -->
<div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
<div class="flex flex-col sm:flex-row gap-1 bg-slate-100 dark:bg-slate-900 p-2">
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<img alt="Before dental treatment showing stained or uneven teeth" class="object-cover w-full h-full" data-alt="Before upper teeth treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqCsDrOhkYOvTTLbcwsax3r6bfDx7I87adjt532XNpLjiIvb8xRdi32XEBRzVbNwE-d_-95zSR6w9MNDQTHkHLRyK2H580ZqHTKxYz31VSJCaQKK3TLgbl2Y4xrYCf6Em0iDSQNN3hD1uMbObNRC5eQK1VIKbRKZl9HZcxKAG_Ew0Y3_itNLI-FLIRkyFXgO3i44mhYywUsKgmTP786Xfx-NEvN5vM1jy-t1mt-8FNaVa3aCUt2vquawYbxSyIWi5reTdpwu3yIw"/>
<div class="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Before</div>
</div>
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<img alt="After dental treatment showing bright, straight smile" class="object-cover w-full h-full" data-alt="After upper teeth treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA5SMLy7d2Y53Dgy4NRWGTYse45ypFnuabzEckP_GEEtrjzmw8AQGnWP_B8A-aFxvDWAR7p9PE_lnxYkiiOFTIGQYru5rA7AqdoRofKKJT2zg3nBrFLe_CIUJfmKm80Gyo7VEXorN4oAbDqZxT0EMemtd5IQj1aNZAy4Hd_eF_NFUDuAzwVJbAoXx3jJKxK8tWVEBw30ILI97793UWJdKbcuDM9QNEQdOV2l-DMS1FYV3qHz0KwvuPEyquHXT2tzZtpYJGBNEEFA"/>
<div class="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">After</div>
</div>
</div>
<div class="p-6 flex flex-col gap-4">
<div>
<h3 class="text-xl font-bold mb-2">Porcelain Veneers</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Patient wanted to correct discoloration and slight crowding on upper anterior teeth. Treatment completed with 6 custom porcelain veneers.</p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
<button class="text-primary font-semibold text-sm hover:text-primary/80 flex items-center gap-1 transition-colors">
                                        View Case Details <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<!-- Case Study 2 -->
<div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
<div class="flex flex-col sm:flex-row gap-1 bg-slate-100 dark:bg-slate-900 p-2">
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<img alt="Before dental treatment showing chipped tooth" class="object-cover w-full h-full" data-alt="Before upper crowns treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlkltyvcOzmVp23MoYnLrGLkDUj3cEZN2mPSIoSxpZPOG7lKnOfB2BRw4xnXlBxd0tqB2qQ5-Ha91JpBpSk8T0pMHYFQ8yNQLZu6i_Ag4l-36WTO-rmzupJJsD-xEQu_uMf66FqFlXVVoHHKalvgIdNmwIzdKcPX6z0OtBTdOHCwtYxA8XsCQdbDl7VL0cGX9AayTzvRhXksax3yJJZ1A-YkXU109fvJB37YX3Lw4VY0k7xIPF6Pr2P04nRuBQR6oldgrAisqnLg"/>
<div class="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Before</div>
</div>
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<img alt="After dental treatment showing repaired tooth" class="object-cover w-full h-full" data-alt="After upper crowns treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnkEhLaENNh1AYPiSl9kCZOiONOkJT1vF5edpEHBVrzy3wxdk8YOIIzQ1AyY5utoG3KzwvMzF3xMqFW34nf7PPPF4txXoVjx3qpXgOhfvH38a7L7B85Qd7kxgn4PSwRoKvjhwtck5krkDtpecVXt96QNqr6MhRGU3tx6FsQEA--tpZz75YRzhXKFjA-FKtjpOPQapRRNg0M0k9bBvvAfpwja9E4p3UROarFgbRpglhJjFUNvu7e7KMcnQI8IHmaFGlEVjwP2H9iA"/>
<div class="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">After</div>
</div>
</div>
<div class="p-6 flex flex-col gap-4">
<div>
<h3 class="text-xl font-bold mb-2">Crown Lengthening &amp; E-Max Crowns</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Correction of a 'gummy smile' followed by placement of four E-Max crowns to improve proportion and aesthetics of the upper front teeth.</p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
<button class="text-primary font-semibold text-sm hover:text-primary/80 flex items-center gap-1 transition-colors">
                                        View Case Details <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<!-- Case Study 3 -->
<div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
<div class="flex flex-col sm:flex-row gap-1 bg-slate-100 dark:bg-slate-900 p-2">
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<div class="absolute inset-0 bg-slate-300 dark:bg-slate-600 flex items-center justify-center">
<span class="material-symbols-outlined text-4xl text-slate-400">image</span>
</div>
<div class="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Before</div>
</div>
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<div class="absolute inset-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
<span class="material-symbols-outlined text-4xl text-slate-400">image</span>
</div>
<div class="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">After</div>
</div>
</div>
<div class="p-6 flex flex-col gap-4">
<div>
<h3 class="text-xl font-bold mb-2">Composite Bonding</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Minimally invasive composite bonding to close a diastema (gap) between the upper central incisors in a single visit.</p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
<button class="text-primary font-semibold text-sm hover:text-primary/80 flex items-center gap-1 transition-colors">
                                        View Case Details <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<!-- Case Study 4 -->
<div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col">
<div class="flex flex-col sm:flex-row gap-1 bg-slate-100 dark:bg-slate-900 p-2">
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<div class="absolute inset-0 bg-slate-300 dark:bg-slate-600 flex items-center justify-center">
<span class="material-symbols-outlined text-4xl text-slate-400">image</span>
</div>
<div class="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Before</div>
</div>
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
<div class="absolute inset-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
<span class="material-symbols-outlined text-4xl text-slate-400">image</span>
</div>
<div class="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">After</div>
</div>
</div>
<div class="p-6 flex flex-col gap-4">
<div>
<h3 class="text-xl font-bold mb-2">Implant Restoration</h3>
<p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Replacement of a missing upper lateral incisor with a single dental implant and custom-shaded porcelain crown.</p>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
<button class="text-primary font-semibold text-sm hover:text-primary/80 flex items-center gap-1 transition-colors">
                                        View Case Details <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
<!-- Call to Action -->
<div class="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border border-primary/20">
<div class="max-w-xl">
<h2 class="text-2xl md:text-3xl font-bold mb-4">Ready to transform your smile?</h2>
<p class="text-slate-600 dark:text-slate-400 text-base">Schedule a consultation with our experienced cosmetic dentists to discuss your goals and see how we can help you achieve the smile of your dreams.</p>
</div>
<button class="shrink-0 bg-primary hover:bg-primary/90 transition-colors text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20">
                            Book Consultation
                        </button>
</div>
</div>
</div>
</div>
</div>
</body></html>` }} />
  );
}