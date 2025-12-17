import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { styles } from "@/assets/Styles/base";

const MyWorks = () => {
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

  useEffect(() => {
    axios
      .get("https://api.github.com/users/mahmud-ops/repos")
      .then((res) => setRepos(res.data))
      .catch(console.error);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold text-center">Github</h1>
      <ul>
        {repos
          .filter((repo) => !Hidden_repos.includes(repo.name))
          .map((repo) => (
            <li className="font-extrabold bg-white/25 rounded-lg border border-white p-3 m-2 backdrop-blur-md hover:bg-white/30 transition-colors">
              <div className="flex items-center justify-between">
                <a
                  href={`https://github.com/mahmud-ops/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center cursor-pointer"
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
    </motion.div>
  );
};

export default MyWorks;
