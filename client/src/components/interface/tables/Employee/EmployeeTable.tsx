"use client";

import { useState, useEffect } from "react";
import FormEmployeeCreate from "../../forms/formEmployee/Create/FormEmployeeCreate";
import FormEmployeeUpdate from "../../forms/formEmployee/Update/FormEmployeeUpdate";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type DiasDaSemana =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

interface Employee {
  name: string;
  role: string;
  services: string;
  password: string;
  workingDay: string;
  startTimePause: string;
  endTimePause: string;
  _id: string;
}

const EmployeeTable: React.FC = () => {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [showEditEmployee, setShowEditEmployee] = useState(false);

  const handleEditEmployeeClick = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowEditEmployee(true);
  };

  const handleCloseEditEmployee = () => {
    setEditingEmployee(null);
    setShowEditEmployee(false);
  };

  const handleAddEmployeeClick = () => {
    setShowAddEmployee(true);
  };

  const handleEmployeeCreated = (newEmployee: Employee) => {
    setEmployees([...employees, newEmployee]);
  };

  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    const updatedEmployees = employees.map((employee) =>
      employee._id === updatedEmployee._id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    handleCloseEditEmployee();
  };
  const handleCloseAddEmployee = () => {
    setShowAddEmployee(false);
    // Atualize a tabela chamando a API novamente
    fetch("https://sunx-api-agendamento.vercel.app/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => console.error("Erro ao buscar funcionários:", error));
  };

  useEffect(() => {
    fetch("https://sunx-api-agendamento.vercel.app/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => console.error("Erro ao buscar serviços:", error));
  }, []);

  const handleDeleteEmployee = async (id: string) => {
    try {
      const response = await fetch(
        `https://sunx-api-agendamento.vercel.app/employees/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Update the list of employees after successful deletion
        const updatedEmployees = employees.filter(
          (employee) => employee._id !== id
        );
        toast.success("O funcionário foi excluído!");
        setEmployees(updatedEmployees);
      } else {
        console.error("Erro ao excluir o funcionário:", response.statusText);
        toast.error("Erro ao excluir o funcionário");
      }
    } catch (error) {
      console.error("Erro de rede ao excluir o funcionário:", error);
      toast.error("Erro de rede ao excluir o funcionário!");
    }
  };

  const traduzirDiaDaSemana = (diaEmIngles: DiasDaSemana): string => {
    const diasDaSemana: Record<DiasDaSemana, string> = {
      Monday: "Segunda-feira",
      Tuesday: "Terça-feira",
      Wednesday: "Quarta-feira",
      Thursday: "Quinta-feira",
      Friday: "Sexta-feira",
      Saturday: "Sábado",
      Sunday: "Domingo",
    };

    return diasDaSemana[diaEmIngles] || diaEmIngles;
  };

  return (
    <>
      <ToastContainer />
      {showAddEmployee && (
        <FormEmployeeCreate
          onClose={handleCloseAddEmployee}
          onEmployeeCreated={handleEmployeeCreated}
        />
      )}
      {showEditEmployee && (
        <FormEmployeeUpdate
          employee={editingEmployee}
          onClose={handleCloseEditEmployee}
          onUpdateEmployee={handleUpdateEmployee}
        />
      )}
      <main className="pt-32 h-full bg-gradient-to-t from-gray-200 via-gray-300 to-gray-300">
        <section className="container px-4 justify-center ">
          <div className="flex items-center md:gap-x-3 lg:gap-x-3">
            <h1 className=" text-sm md:text-2xl lg:text-2xl font-bold text-gray-700 md:ml-8 lg:ml-8">
              Equipe de Blade Fall
            </h1>
            <span className="lg:flex md:flex hidden px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {employees.length} Funcionários
            </span>
            <span className="sm:flex lg:hidden md:hidden flex-row px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {employees.length}&nbsp;Funcionários
            </span>
            <button
              type="button"
              onClick={handleAddEmployeeClick}
              className="flex items-center rounded  px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500"
            >
              <span className="mx-2">+ Adicionar Funcionário</span>
            </button>
          </div>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border rounded-xl border-gray-200 dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Nome</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Função</span>
                          </button>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Serviços
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Dias de trabalho
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Início do intervalo
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Fim do intervalo
                        </th>
                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {employees.map((employee) => (
                        <tr key={employee._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-medium text-gray-800 dark:text-white">
                                    {employee.name}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {employee.role}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap w-auto overflow-x-auto">
                            <div className="grid lg:grid-cols-2 items-center gap-2">
                              {employee.services &&
                                employee.services
                                  .split(",")
                                  .map((service, index) => (
                                    <p
                                      key={index}
                                      className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60 w-auto"
                                    >
                                      {service.trim()}
                                    </p>
                                  ))}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap w-auto overflow-x-auto">
                            <div className="grid lg:grid-cols-2 items-center gap-2 ">
                              {employee.workingDay &&
                                employee.workingDay
                                  .split(",")
                                  .map((workingDay, index) => (
                                    <p
                                      key={index}
                                      className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60 w-auto"
                                    >
                                      {traduzirDiaDaSemana(
                                        workingDay.trim() as DiasDaSemana
                                      )}
                                    </p>
                                  ))}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-medium text-gray-500 dark:text-white">
                                    {employee.startTimePause}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-medium text-gray-500 dark:text-white">
                                    {employee.endTimePause}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex justify-end gap-x-6">
                              <button
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                                onClick={() => handleDeleteEmployee(employee._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                              <button
                                className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                                onClick={() => handleEditEmployeeClick(employee)} // Abre o formulário de edição com o serviço
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EmployeeTable;
