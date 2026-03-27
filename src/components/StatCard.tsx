export default function StatCard({ value, suffix, label }: any) {
  return (
    <div
      className="
        p-6 rounded-xl text-center

        bg-gray-100 text-gray-900 border border-gray-200
        dark:bg-white/5 dark:text-white dark:border-white/10

        hover:scale-105 
        hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]

        transition duration-300
      "
    >
      <h4 className="text-2xl font-bold text-blue-500">
        {value}{suffix}
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {label}
      </p>
    </div>
  );
}