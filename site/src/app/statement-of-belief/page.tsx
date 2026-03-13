"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const beliefs = [
  {
    title: "The Holy Scriptures",
    content: "We believe the Bible is the inspired, infallible, and authoritative Word of God, serving as the ultimate guide for faith and practice in the life of every believer.",
  },
  {
    title: "The Trinity",
    content: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, each fully God, each equal in power and glory.",
  },
  {
    title: "Jesus Christ",
    content: "We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory.",
  },
  {
    title: "Salvation",
    content: "We believe that salvation is a gift of God's grace, received through faith in the Lord Jesus Christ. It is not earned by works but is freely given to all who believe.",
  },
  {
    title: "The Holy Spirit",
    content: "We believe in the present ministry of the Holy Spirit, whose indwelling enables the Christian to live a godly life, empowering believers for service and witness.",
  },
  {
    title: "The Church",
    content: "We believe the Church is the body of Christ, composed of all believers, called to worship, fellowship, discipleship, and the proclamation of the Gospel to all nations.",
  },
  {
    title: "Prayer & Holiness",
    content: "We believe in the power of prayer and the call to holy living. Revival begins with prayer, and holiness is the pathway to a deeper relationship with God.",
  },
  {
    title: "The Return of Christ",
    content: "We believe in the personal, visible return of the Lord Jesus Christ to earth and the establishment of His kingdom. We look forward with hope to the fulfillment of God's promises.",
  },
];

export default function StatementOfBeliefPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <Image src="/images/hero/belief-bg.webp" alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-12 h-12 text-white/70 mx-auto mb-6" strokeWidth={1.5} />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Statement of Belief
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              The foundational truths that guide our ministry and faith
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-8 rounded-xl bg-cream border border-black/5"
              >
                <h3 className="font-serif text-xl font-bold text-heading mb-3">{belief.title}</h3>
                <p className="text-text leading-relaxed">{belief.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
