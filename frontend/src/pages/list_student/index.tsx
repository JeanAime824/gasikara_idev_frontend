import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import InputComponent from "@/components/InputComponent";

type Student = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    level: string;
    status: number;
};

const initialStudents: Student[] = [
    { id: "1", firstName: "Marie", lastName: "Dubois", email: "marie.dubois@example.com", level: "L1", status: 21 },
    { id: "2", firstName: "Jean", lastName: "Rakoto", email: "jean.rakoto@example.com", level: "L2", status: 2 },
    { id: "3", firstName: "Aina", lastName: "Rasoanaivo", email: "aina.raso@example.com", level: "M1", status: 3 },
    { id: "4", firstName: "Hery", lastName: "Andrian", email: "hery.andrian@example.com", level: "L3", status: 4 },
];

export default function ListStudentPage() {
    const [query, setQuery] = useState("");
    const [students] = useState<Student[]>(initialStudents);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return students;
        return students.filter((s) =>
            [s.firstName, s.lastName, s.email, s.level, s.status]
                .join(" ")
                .toLowerCase()
                .includes(q)
        );
    }, [query, students]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Liste des étudiants</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Parcourez et gérez les étudiants</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button className="hidden sm:inline-flex">Exporter</Button>
                            <Button>Ajouter</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    {/* Toolbar */}
                    <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="w-full sm:max-w-xs">
                                <InputComponent
                                    placeholder="Rechercher par nom, email, niveau..."
                                    value={query}
                                    onChange={(e: any) => setQuery(e.target.value)}
                                />
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {filtered.length} résultat(s)
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left">
                            <thead className="bg-gray-50 dark:bg-gray-900/40">
                                <tr className="text-xs uppercase text-gray-500 dark:text-gray-400">
                                    <th className="px-4 sm:px-6 py-3 font-medium">Nom</th>
                                    <th className="px-4 sm:px-6 py-3 font-medium">Email</th>
                                    <th className="px-4 sm:px-6 py-3 font-medium">Niveau</th>
                                    <th className="px-4 sm:px-6 py-3 font-medium">Numéro</th>
                                    <th className="px-4 sm:px-6 py-3 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((s) => (
                                    <tr key={s.id} className="border-t border-gray-200 dark:border-gray-700 text-sm">
                                        <td className="px-4 sm:px-6 py-3">
                                            <div className="font-medium text-gray-900 dark:text-white">{s.firstName} {s.lastName}</div>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3 text-gray-700 dark:text-gray-300">{s.email}</td>
                                        <td className="px-4 sm:px-6 py-3">
                                            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-300">{s.level}</span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3">
                                            <span className={
                                                s.status === 1
                                                    ? "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10 dark:bg-green-900/30 dark:text-green-300"
                                                    : "inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-700/60 dark:text-gray-200"
                                            }>
                                                {s.status}
                                            </span>
                                        </td>
                                        <td className="px-4 sm:px-6 py-3">
                                            <div className="flex justify-end gap-2">
                                                <Button variant="outline" size="sm">Voir</Button>
                                                <Button size="sm">Editer</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td className="px-4 sm:px-6 py-12 text-center text-sm text-gray-500 dark:text-gray-400" colSpan={5}>
                                            Aucun étudiant trouvé.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


