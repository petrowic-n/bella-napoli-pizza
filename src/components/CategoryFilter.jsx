
export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex gap-1 md:mt-0 mt-4 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`tab ${activeCategory === category.id ? "active" : ""} px-5 py-2 border border-border bg-transparent rounded-xs cursor-pointer transition-all duration-200`}
        >
          <span className="text-base text-muted">{category.label}</span>
        </button>
      ))}
    </div>
  );
};
