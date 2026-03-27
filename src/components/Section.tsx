import { motion } from "framer-motion";

export default function Section({ title, data }: any) {
  return (
    <div className="mb-10">
      <h3 className="mb-4 font-semibold flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
        {title}
      </h3>

      <div className="space-y-4">
        {data.map((item: any, i: number) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="flex items-center gap-2">
                {item.icon}
                {item.name}
              </span>
              <span>{item.value}%</span>
            </div>

            <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}