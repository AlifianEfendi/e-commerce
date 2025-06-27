import { useState } from "react";
import DashboardShell from "../../components/layouts/DashboardShell";
import Pagination from "../../components/elements/Pagination";

export default function ManageUsersPage() {
    const [isOpen, setIsOpen] = useState(false);
        const usersData = [
        { id: 1, name: "John Doe", email: "k5A1o@example.com", joinDate: "01 Jan 2020",  role: "Owner" },
        { id: 2, name: "Jane Smith", email: "l0ZiI@example.com", joinDate: "15 Feb 2021", role: "Admin" },
        { id: 3, name: "Alice Johnson", email: "6zPdM@example.com", joinDate: "10 Mar 2022", role: "Admin" }
    ];

    return (
        <DashboardShell title="Kelola Admin" metaTitle="Kelola Admin - Dashboard" isOpen={isOpen} setIsOpen={setIsOpen}>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col">
                    {/* Users Table */}
                    <div className="flex flex-col justify-between bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="w-full overflow-x-auto no-scrollbar">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                            No
                                        </th>
                                    
                                        <th scope="col" className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                            Nama
                                        </th>
                                    
                                        <th scope="col" className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                    
                                        <th scope="col" className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal Bergabung
                                        </th>
                                    
                                        <th scope="col" className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                    
                                        <th scope="col" className="px-6 py-3 text-left text-xs whitespace-nowrap font-medium text-gray-500 uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                            
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {usersData.map((user, index) => (
                                    <tr
                                        key={user.id}
                                        className="hover:bg-gray-50 cursor-pointer"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.joinDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.role}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-red-600 hover:text-red-900 cursor-pointer">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    
                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </main>
        </DashboardShell>
    )
}