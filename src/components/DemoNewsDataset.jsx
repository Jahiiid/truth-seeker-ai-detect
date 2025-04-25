
import React from "react";

const newsDataset = [
  {
    title: "পদ্মা সেতু উদ্বোধন",
    publication: "প্রথম আলো",
    date: "২০২২-০৬-২৫",
    url: "https://www.prothomalo.com/bangladesh/article/পদ্মা-সেতু-উদ্বোধন"
  },
  {
    title: "করোনাভাইরাস: টিকার চতুর্থ ডোজ শুরু",
    publication: "যুগান্তর",
    date: "২০২৩-০১-১০",
    url: "https://www.jugantor.com/health/article/টিকার-চতুর্থ-ডোজ"
  },
  {
    title: "বন্যায় সিলেটে ভয়াবহ অবস্থা",
    publication: "এনটিভি অনলাইন",
    date: "২০২২-০৭-১৭",
    url: "https://www.ntvbd.com/bangladesh/article/সিলেট-বন্যা-ভয়াবহ"
  },
  {
    title: "স্বপ্ন পূরণের পথে মেট্রোরেল",
    publication: "দৈনিক ইনকিলাব",
    date: "২০২২-১২-২৮",
    url: "https://www.inkilab.com/article/মেট্রোরেল-সফল-উদ্যোগ"
  },
  {
    title: "বাংলাদেশের প্রথম স্যাটেলাইট ‘বঙ্গবন্ধু-১’ উৎক্ষেপণ",
    publication: "বাংলাদেশ সংবাদ সংস্থা (বাসস)",
    date: "২০১৮-০৫-১২",
    url: "https://www.bssnews.net/news/বঙ্গবন্ধু-১-উৎক্ষেপণ"
  },
  {
    title: "এইচএসসি ফল প্রকাশ",
    publication: "বাংলাদেশ প্রতিদিন",
    date: "২০২৩-১১-২৬",
    url: "https://www.bd-pratidin.com/education-news/এইচএসসি-ফল-২০২৩"
  },
  {
    title: "ডিজিটাল নিরাপত্তা আইন সংশোধন",
    publication: "সমকাল",
    date: "২০২৩-০৯-০৩",
    url: "https://samakal.com/bangladesh/article/ডিজিটাল-নিরাপত্তা-আইন"
  },
  {
    title: "স্বাস্থ্যখাতে পরিবর্তন",
    publication: "কালের কণ্ঠ",
    date: "২০২১-০৫-২০",
    url: "https://www.kalerkantho.com/online/national/স্বাস্থ্যখাত-পরিবর্তন"
  }
];

const DemoNewsDataset = () => (
  <section className="py-10 px-4">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-truthseeker-blue">বাংলাদেশি খবরের ডেমো ডেটাসেট</h3>
      <div className="overflow-x-auto rounded-md border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">শিরোনাম</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">প্রকাশনা</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">তারিখ</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">লিংক</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {newsDataset.map((news, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition">
                <td className="px-4 py-2 text-sm">{news.title}</td>
                <td className="px-4 py-2 text-sm">{news.publication}</td>
                <td className="px-4 py-2 text-sm">{news.date}</td>
                <td className="px-4 py-2 text-sm">
                  <a
                    href={news.url}
                    className="text-truthseeker-blue underline hover:text-truthseeker-lightblue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    বিস্তারিত
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">উৎস: নির্বাচিত পাবলিকলি অ্যাভেইলেবল পত্রিকার খবর শুধুমাত্র ডেমো দেখার জন্য।</p>
    </div>
  </section>
);

export default DemoNewsDataset;
