"use client";

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
    content: "We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles, His atoning death through His shed blood, His bodily resurrection, His ascension to the right hand of the Father, and His personal return in power and glory.",
  },
  {
    title: "The Holy Spirit",
    content: "We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life. We believe the Holy Spirit is actively revealing God's plans for revival in our time.",
  },
  {
    title: "Salvation",
    content: "We believe that salvation is a gift of God's grace, received through faith in Jesus Christ alone. It is not earned by good works but is the result of God's mercy and love for humanity.",
  },
  {
    title: "The Church",
    content: "We believe in the universal Church as the living body of Christ, comprised of all believers. We are called to fellowship, worship, discipleship, and the spreading of the Gospel.",
  },
  {
    title: "Revival",
    content: "We believe that God is bringing about a revival of the Word in our time, that the Holy Spirit is revealing plans He has been nurturing for many years, and that learning is the first step in this Christian Revival.",
  },
  {
    title: "Prayer and Holiness",
    content: "We believe in the power of prayer and the call to live a holy life. Through prayer and fasting, believers draw closer to God and experience His transformative power.",
  },
];

export default function StatementOfBeliefPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-dark via-dark-light to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-12 h-12 text-secondary-light mx-auto mb-6" strokeWidth={1.5} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Statement of Belief
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              The foundational truths we hold at Revival Grace Ministry
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
                className="p-8 rounded-2xl bg-warm-gray border border-black/10"
              >
                <h3 className="text-xl font-bold text-dark mb-3">{belief.title}</h3>
                <p className="text-text leading-relaxed">{belief.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
