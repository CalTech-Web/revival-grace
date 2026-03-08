"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const verses = [
  { text: "My Father who gave them to me is greater than anyone else; no one can snatch them from him.", ref: "John 10:29" },
  { text: "I the Lord will grab you by the hand and tell you, Don't be afraid! I myself will help you.", ref: "Isaiah 41:13" },
  { text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.", ref: "Psalm 23:1-3" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", ref: "Proverbs 3:5-6" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", ref: "Isaiah 40:31" },
  { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
  { text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", ref: "Romans 8:28" },
  { text: "He heals the brokenhearted and binds up their wounds.", ref: "Psalm 147:3" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", ref: "Philippians 4:6" },
  { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", ref: "Proverbs 18:10" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", ref: "John 3:16" },
  { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4" },
  { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", ref: "Galatians 5:22-23" },
  { text: "If God is for us, who can be against us?", ref: "Romans 8:31" },
  { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", ref: "Numbers 6:24-25" },
  { text: "Wait for the Lord; be strong and take heart and wait for the Lord.", ref: "Psalm 27:14" },
  { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", ref: "John 14:27" },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.", ref: "Lamentations 3:22-23" },
  { text: "Draw near to God, and he will draw near to you.", ref: "James 4:8" },
  { text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "In their hearts humans plan their course, but the Lord establishes their steps.", ref: "Proverbs 16:9" },
  { text: "He gives strength to the weary and increases the power of the weak.", ref: "Isaiah 40:29" },
  { text: "Your word is a lamp for my feet, a light on my path.", ref: "Psalm 119:105" },
  { text: "The Lord is my light and my salvation, whom shall I fear? The Lord is the stronghold of my life, of whom shall I be afraid?", ref: "Psalm 27:1" },
  { text: "You will seek me and find me when you seek me with all your heart.", ref: "Jeremiah 29:13" },
];

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export default function VerseOfTheDay() {
  const [todayVerse, setTodayVerse] = useState(verses[0]);
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const now = new Date();
    const dayIndex = getDayOfYear(now) % verses.length;
    setTodayVerse(verses[dayIndex]);
    setDateString(now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }));
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-warm-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />

          <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
            {dateString}
          </p>

          <h2 className="font-serif text-sm font-semibold text-text uppercase tracking-wider mb-8">
            Verse of the Day
          </h2>

          <blockquote className="font-serif text-2xl sm:text-3xl text-heading leading-relaxed mb-6 italic">
            &ldquo;{todayVerse.text}&rdquo;
          </blockquote>

          <p className="text-primary font-bold text-lg">
            {todayVerse.ref}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
