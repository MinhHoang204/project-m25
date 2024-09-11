import React from 'react'
import { getCategories, deleteCategory, Category } from '../services/categoryService';
import { useEffect, useState } from 'react';
interface Props {
    selectedCategory: Category | null;
    onSave: () => void;
}
export default function CategoryForm(onEdit:any) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      await deleteCategory(id);
      loadCategories();
    }
  };
  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => onEdit(category)}>Edit</button>
            <button onClick={() => handleDelete(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
