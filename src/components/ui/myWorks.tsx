import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { styles } from "@/assets/Styles/base";
import TechNotes from "@/assets/Tech_notes.png";

const MyWorks = () => {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const Hidden_repos = [
    "aiyka1.0",
    "cf-stats",
    "cfStat",
    "Competitive-Programming",
    "CSE_1201_exam_prep",
    "Expandable_text",
    "mahmud-ops",
    "Codeforces_Solution",
  ];

  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState<any[]>();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/mahmud-ops/repos?sort=date")
      .then((res) => setRepos(res.data))
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  // Filter repos and setup pagination
  const visibleRepos = repos.filter(
    (repo) => !Hidden_repos.includes(repo.name)
  );
  const totalPages = Math.ceil(visibleRepos.length / ITEMS_PER_PAGE);
  const paginatedRepos = visibleRepos.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-center">Github repositories</h1>
        {error && (
          <h1 className="text-center p-2  bg-red-400 text-black mx-auto my-2 rounded-lg max-w-150">
            {error}
          </h1>
        )}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[90px] gap-4">
          {paginatedRepos.map((repo) => (
            <li
              key={repo.id}
              className="mx-auto w-87.5 font-extrabold bg-white/25 rounded-lg border border-white p-3 m-2 backdrop-blur-md hover:bg-white/30 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`https://github.com/mahmud-ops/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-left cursor-pointer truncate whitespace-nowrap overflow-hidden"
                  title={repo.name}
                >
                  {repo.name}
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.glassBtn}`}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className={`${styles.glassBtn} disabled:opacity-40`}
            >
              Prev
            </button>

            <span className="text-sm opacity-80">
              {page} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className={`${styles.glassBtn} disabled:opacity-40`}
            >
              Next
            </button>
          </div>
        )}
      </motion.div>

      <motion.div
        // Card Container Styles
        className="max-w-md mx-auto bg-neutral-950 p-8 rounded-4xl border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-white mb-8 tracking-tight">
          Notes
        </h1>

        {/* Glass Button Card */}
        <div
          className={`group flex flex-col items-center justify-center transition-transform hover:scale-[1.02] active:scale-95 ${styles.glassBtn}`}
        >
          <a
            href="https://github.com/mahmud-ops/Tech_Notes/"
            className="flex flex-col items-center gap-4 w-full"
          >
            <p className="text-lg tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
              Tech Notes
            </p>

            <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black/20">
              <img
                src={TechNotes}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                alt="Tech notes"
              />
            </div>
          </a>
        </div>

        <br />
        {/* Glass Button Card */}
        <div
          className={`group flex flex-col items-center justify-center transition-transform hover:scale-[1.02] active:scale-95 ${styles.glassBtn}`}
        >
          <a
            href="https://github.com/mahmud-ops/second-brain"
            className="flex flex-col items-center gap-4 w-full"
          >
            <p className="text-lg tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
              Second brain
            </p>

            <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black/20">
              <img
                src={TechNotes}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                alt="Tech notes"
              />
            </div>
          </a>
        </div>

      </motion.div>
    </div>
  );
};

export default MyWorks;
