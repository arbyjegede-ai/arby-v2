"use client";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import { DotIcon } from "lucide-react";

const spenditurePage = () => {
  return (
    <div className="bg-white py-8 text-[#1a1a1a] min-h-screen">
      <Header />

      <section className="w-full h-[70vh] md:h-[85vh] bg-[#03947B] flex items-end justify-center overflow-hidden relative px-4">
        <div className="flex items-end justify-center gap-4 md:gap-14 translate-y-1 md:translate-y-2">
          <img
            src="/assets/images/spenditure-3.png"
            alt="Transaction Detail"
            className="w-[24%] md:w-56 object-contain shadow-2xl rounded-[2rem] transform -rotate-2 translate-y-12 md:translate-y-7"
          />

          <img
            src="/assets/images/spenditure-2.png"
            alt="Main Dashboard"
            className="w-[28%] md:w-64 object-contain shadow-2xl rounded-[2rem] z-10 scale-110 md:scale-125"
          />

          <img
            src="/assets/images/spenditure-1.png"
            alt="Add Bill Screen"
            className="w-[24%] md:w-56 object-contain shadow-2xl rounded-[2rem] transform rotate-2 translate-y-12 md:translate-y-7"
          />
        </div>
      </section>

      <article className="max-w-full mx-auto py-24 font-sans">
        <div className="flex justify-between text-center items-baseline mx-auto max-w-6xl mb-12 border-b border-gray-100 pb-6 px-4 xl:px-0">
          <h2 className="text-xl font-bold tracking-tight">Spenditure</h2>
          <span className="text-gray-400 font-medium">August 2025</span>
        </div>

        <h1 className="text-4xl md:text-5xl mx-auto max-w-6xl font-extrabold mb-20 tracking-tighter leading-[1.1] text-gray-900 px-4 xl:px-0">
          Rethinking Personal Expense Awareness
        </h1>

        <div className="space-y-12 mx-auto max-w-6xl mb-32 min-w-2xl px-4 xl:px-0">
          <section>
            <h3 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-900 mb-3">
              Sector
            </h3>
            <p className="text-gray-500 text-lg">
              Product Design • Fintech • UX Strategy • Data Visualization
            </p>
          </section>

          <section>
            <h3 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-900 mb-3">
              Challenge
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              The challenge was to design a system that not only tracks expenses
              but transforms raw financial data into clear, actionable insights
              that improve awareness and decision-making over time.
            </p>
          </section>

          <section>
            <h3 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-900 mb-3">
              Role
            </h3>
            <p className="text-gray-500 text-lg">Product Designer</p>
          </section>

          <section>
            <h3 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-900 mb-3">
              Timeline
            </h3>
            <p className="text-gray-500 text-lg">2 months</p>
          </section>
        </div>

        <div className="space-y-24 md:space-y-32">
          <section className="max-w-6xl mx-auto px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Overview
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-4xl">
              Spenditure is a personal finance mobile application designed to
              help users track and understand their daily expenses. While many
              tools make it easy to record transactions, they often stop short
              of helping users interpret what that data actually means.
            </p>
          </section>

          <section className="max-w-6xl mx-auto px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Product Context
            </h2>
            <div className="space-y-8 max-w-6xl">
              <p className="text-4xl font-medium text-gray-800 leading-snug">
                Personal finance products depend heavily on consistency. Users
                are expected to log expenses regularly, yet many abandon these
                tools not because the interaction is difficult, but because the
                outcome feels unrewarding.
              </p>
              <p className="text-gray-500 text-xl leading-relaxed">
                When someone cannot easily answer a simple question like{" "}
                <span className="italic text-gray-900 font-semibold">
                  "Where is my money going?"
                </span>
                , the act of tracking begins to feel pointless.
              </p>
              <p className="text-gray-500 text-xl leading-relaxed">
                Spenditure is built around closing that gap, ensuring that every
                recorded expense contributes to a clearer understanding of
                financial behavior.
              </p>
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              The Problem
            </h2>
            <h3 className="text-2xl font-bold mb-8 text-gray-800 leading-tight border-l-4 border-[#03947B] pl-6 py-2">
              "Most expense tracking tools are optimized for collecting data, not
              explaining it."
            </h3>
            <p className="text-gray-500 text-xl leading-relaxed max-w-4xl">
              Users record transactions and build up a history of spending, but
              are often left with long lists and scattered numbers that offer
              little clarity. Over time, this creates a disconnect between
              effort and value.
            </p>
          </section>

          <section className="bg-[#FBF8F9] py-20 px-4 xl:px-0">
            <h2 className="max-w-6xl mx-auto text-2xl md:text-3xl font-bold mb-10 text-gray-900">
              From Data Logging to Financial Understanding
            </h2>
            <p className="max-w-6xl mx-auto text-gray-800 text-xl leading-relaxed mb-16 min-w-4xl">
              In many products, users are required to manually scan and
              interpret long lists of expenses, making it difficult to identify
              patterns or understand spending behavior.
            </p>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-4">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-8">
                  Before: Data Without Clarity
                </p>
                <img
                  src="/assets/images/f-s-6.png"
                  alt="Before: Transaction List"
                  className="w-50 shadow-lg rounded-3xl mb-6 mx-auto"
                />
                <p className="text-gray-500 text-sm">
                  Users manually scan transaction lists to interpret their
                  spending.
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-600 mb-8">
                  After: Insight at a Glance
                </p>
                <img
                  src="/assets/images/detail.png"
                  alt="After: Insight Dashboard"
                  className="w-50 shadow-lg rounded-3xl mb-6 mx-auto"
                />
                <p className="text-gray-500 text-sm">
                  Spenditure surfaces key insights instantly for faster
                  understanding.
                </p>
              </div>
            </div>
          </section>
          <section className="max-w-6xl mx-auto">
           <div className="text-gray-800 text-xl leading-relaxed">
             In many products, users are required to manually scan and interpret long lists of expenses, making it difficult to identify patterns or understand spending behavior.
           </div>
          </section>
          <section className="bg-[#FBF8F9] py-20 px-4 xl:px-0">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">
                Understanding the User
              </h2>
              <div className="w-full bg-[#fcfcfc] rounded-3xl p-4 md:p-12 mb-16 shadow-sm border border-gray-100">
                <img
                  src="/assets/images/understand.png"
                  alt="Empathy Map"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              User Journey, Expense Tracking Experience
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              The experience unfolds over time
            </p>
            <div className="w-full bg-[#fcfcfc] rounded-3xl p-4 md:p-12 mb-12 shadow-sm border border-gray-100">
              <img
                src="/assets/images/journey.png"
                alt="User Journey Map"
                className="w-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-xl leading-relaxed max-w-4xl">
              This journey highlights a critical gap — not in recording, but in
              understanding.
            </p>
          </section>

          <section className="mx-auto max-w-6xl px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Key Insights
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              The problem is not that users fail to track their expenses, it's
              that they struggle to understand what their data reveals. When
              tracking does not translate into clear insight, the experience
              loses its value.
            </p>
          </section>

          <section className="mx-auto max-w-6xl pb-12 px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Design Approach
            </h2>
            <p className="text-gray-800 text-xl leading-relaxed mb-8">
              The design shifts the product from data collection to insight
              generation. Rather than adding complexity, the focus was on:
            </p>
            <ul className="list-disc list-inside text-gray-800 text-xl space-y-4 mb-16 pl-4">
              <li>Simplifying interactions</li>
              <li>Highlighting meaningful patterns</li>
              <li>Reducing the effort required to interpret data</li>
            </ul>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-[1.2]">
              The goal was to ensure every interaction contributes to a clearer
              financial picture.
            </p>
          </section>
          <section className="bg-[#FBF8F9] py-20 px-4 xl:px-0 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-4xl font-bold text-gray-900">
                  From Insight to Interface.
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed font-semibold">
                  Financial Clarity
                </p>
                <span className="text-gray-800 text-lg leading-relaxed block">
                  The interface surfaces key information at a glance:
                </span>
                <ul className="text-gray-800 text-lg leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Total spending
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Category distribution
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> High-level summaries
                  </li>
                </ul>
                <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-relaxed pt-6">
                  Users can immediately understand their financial position
                  without scanning through transactions.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img
                  src="/assets/images/detail.png"
                  alt="Simplified Transaction Detail"
                  className="w-64 object-contain shadow-2xl rounded-[2.5rem]"
                />
              </div>
            </div>
          </section>
          <section className="py-0 px-4 xl:px-0 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-4xl font-bold text-gray-900">
                  Quick Add Flow
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed">
                  The interface surfaces key information at a glance:
                </p>
                <ul className="text-gray-800 text-lg leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Total spending
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Category distribution
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> High-level summaries
                  </li>
                </ul>
                <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-relaxed pt-6">
                  Users can immediately understand their financial position
                  without scanning through transactions.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img
                  src="/assets/images/f-s-4.png"
                  alt="Main Dashboard"
                  className="w-64 object-contain shadow-2xl rounded-[2.5rem]"
                />
              </div>
            </div>
          </section>
          <section className="bg-[#FBF8F9] py-20 px-4 xl:px-0 w-full">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-4xl font-bold text-gray-900">
                  Spending Insights/Analytics
                </h3>
                <p className="text-gray-800 text-lg pb-4 leading-relaxed">
                  Users can:
                </p>
                <ul className="text-gray-800 text-lg leading-relaxed space-y-2">
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Identify Spending Habits
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> See Category Trends
                  </li>
                  <li className="flex items-center gap-2">
                    <DotIcon className="text-[#03947B]" /> Understand where Money is Going
                  </li>
                </ul>
                <p className="text-gray-800 text-2xl md:text-3xl font-bold leading-relaxed pt-6">
                  Structured visual summaries transform raw data into
                  recognizable patterns.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img
                  src="/assets/images/insights-1.png"
                  alt="Categorization and Limits"
                  className="w-64 object-contain shadow-2xl rounded-[2.5rem]"
                />
              </div>
            </div>
          </section>

          <section className="space-y-32 pt-10 px-4 xl:px-0">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                Structuring the Experience
              </h2>
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                The product is designed as a cohesive system anchored around
                three layers:
              </p>
              <ul className="list-disc list-inside text-gray-500 text-xl space-y-4 mb-8 pl-4">
                <li>
                  <span className="font-bold text-gray-800">Dashboards:</span>{" "}
                  Immediate financial clarity
                </li>
                <li>
                  <span className="font-bold text-gray-800">Transactions:</span>{" "}
                  Organized records
                </li>
                <li>
                  <span className="font-bold text-gray-800">Insights:</span>{" "}
                  Pattern recognition over time
                </li>
              </ul>
              <p className="text-xl font-bold text-gray-900">
                These layers work together to create a continuous loop of
                financial awareness.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Real-Time Financial Feedback Loop
              </h2>
              <div className="w-6xl mx-auto flex justify-center space-x-8 rounded-3xl p-4 md:p-12 mb-8 shadow-sm">
                <img
                  src="/assets/images/detail.png"
                  alt="Real-Time Financial Feedback Loop"
                  className="w-[18%] object-contain shadow-xl rounded-3xl"
                />
                <img
                  src="/assets/images/f-s-6.png"
                  alt="Real-Time Financial Feedback Loop"
                  className="w-[18%] object-contain shadow-xl rounded-3xl"
                />
                <img
                  src="/assets/images/detail.png"
                  alt="Real-Time Financial Feedback Loop"
                  className="w-[18%] object-contain shadow-xl rounded-3xl"
                />
              </div>
              <p className="text-gray-800 text-xl font-medium leading-relaxed max-w-4xl">
                This real-time response connects user actions directly to
                financial outcomes—making tracking interactive rather than
                passive.
              </p>
            </div>
          </section>

          <section className="pt-20 px-4 xl:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900 text-center">
              Final Solution
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-32">
              <img
                src="/assets/images/f-s-1.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-2.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-3.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-4.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/insights-1.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-6.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-7.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-8.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-9.png"
                className="w-full shadow-md rounded-3xl"
              />
              <img
                src="/assets/images/f-s-10.png"
                className="w-full shadow-md rounded-3xl"
              />
            </div>

            <div className="space-y-16 max-w-4xl mx-auto">
              <section>
                <h1 className="font-bold text-4xl pb-16 text-gray-900">
                  "Users can see not just what they spend, but how and why their
                  spending evolves."
                </h1>
                <h2 className="text-xl font-bold mb-4 text-gray-900">Outcome</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  By simplifying how expenditure is captured and interpreted,
                  the experience encourages consistent tracking, builds clearer
                  financial awareness, and empowers users to make more
                  confident, informed decisions over time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-gray-900">Reflections</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Working on Spenditure highlighted that collecting expenditure
                  data is only the starting point. What truly drives value is
                  transforming that data into clear, actionable insight. When
                  users can instantly understand their financial position, the
                  experience evolves from routine tracking to meaningful
                  awareness—making consistency feel effortless rather than
                  enforced.
                </p>
              </section>
            </div>
          </section>
        </div>

<div className="mt-32 pt-12 border-t border-gray-100 flex justify-between items-center max-w-6xl mx-auto px-4 xl:px-0">
  <div className="text-right">
    <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
      Previous Project
    </p>
    <button className="group transition-transform duration-300 hover:scale-110">
      <img
        src="/assets/images/nit-btn.png"
        alt="Next Project"
        className="w-60 transition-all duration-300 group-hover:brightness-110"
      />
    </button>
  </div>
  <div className="text-right">
    <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
      Next Project
    </p>
    <button className="group transition-transform duration-300 hover:scale-110">
      <img
        src="/assets/images/glee-btn.png"
        alt="Next Project"
        className="w-60 transition-all duration-300 group-hover:brightness-110"
      />
    </button>
  </div>

</div>
      </article>

      <footer className="mt-10 pt-10">
        <Socials />
      </footer>
    </div>
  );
};

export default spenditurePage;