import React, { useRef, useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DateCardAdmin from "../../../cards/dateCard/Admin/DateCardAdmin";
import TimeSlotCardAdmin from "../../../cards/timeSlotCard/Admin/TimeSlotCardAdmin";
import ConfirmButton from "../../../buttons/confirmButton/ConfirmButton";


import { format, addDays } from "date-fns";
import Schedule from '@/app/schedule/page';


interface Schedule {
    _id: string;
    nameClient: string;
    nameEmployee: string;
    email: string;
    phone: string;
    service: string;
    price: string;
    time: string;
    dateAndTime: string;
    name: string;
    idIntervaloTempo: string; // ID do intervalo de tempo na agenda do funcionári

}
interface TimeSlot {
    _id: string;
    time: string;
    active: boolean;

}
interface Employee {
    _id: string;
    name: string;
    role: string;
    services: string;
    timeSlotsMonday: TimeSlot[];
    timeSlotsTuesday: TimeSlot[];
    timeSlotsWednesday: TimeSlot[];
    timeSlotsThursday: TimeSlot[];
    timeSlotsFriday: TimeSlot[];
    timeSlotsSaturday: TimeSlot[];
    timeSlotsSunday: TimeSlot[];
}
const today = new Date(); // Defina a data 'today' aqui
const FormScheduleCreate: React.FC<{
    onClose: () => void;
    employeeId?: string | null; // Torna a propriedade employeeId opcional
}> = ({ onClose, employeeId }) => {

    const [nameClient, setNameClient] = useState<string>("");
    const [nameEmployee, setNameEmployee] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [services, setServices] = useState<Employee[]>([]);
    const [price, setPrice] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [dates, setDates] = useState<Date[]>([]);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Estado para rastrear a data selecionada
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const [mondayTimeSlots, setMondayTimeSlots] = useState<TimeSlot[]>([]);
    const [tuesdayTimeSlots, setTuesdayTimeSlots] = useState<TimeSlot[]>([]);
    const [wednesdayTimeSlots, setWednesdayTimeSlots] = useState<TimeSlot[]>([]);
    const [thursdayTimeSlots, setThursdayTimeSlots] = useState<TimeSlot[]>([]);
    const [fridayTimeSlots, setFridayTimeSlots] = useState<TimeSlot[]>([]);
    const [saturdayTimeSlots, setSaturdayTimeSlots] = useState<TimeSlot[]>([]);
    const [sundayTimeSlots, setSundayTimeSlots] = useState<TimeSlot[]>([]);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

    const [isDatesVisible, setDatesVisible] = useState<boolean>(true);
    const [isTimeVisible, setTimeVisible] = useState<boolean>(false);
    const [employee, setEmployee] = useState<Employee>();

    const handleDateClick = (date: Date) => {

        setSelectedDate(date);
        setTimeVisible(true);
        // Aqui você precisa obter os horários associados ao dia selecionado
        const selectedDay = date.getDay(); // Retorna um valor de 0 (domingo) a 6 (sábado)
        switch (selectedDay) {
            case 1: // Monday
                setTimeSlots(mondayTimeSlots);
                break;
            case 2: // Tuesday
                setTimeSlots(tuesdayTimeSlots);
                break;
            case 3: // Wednesday
                setTimeSlots(wednesdayTimeSlots);
                break;
            case 4: // Thursday
                setTimeSlots(thursdayTimeSlots);
                break;
            case 5: // Friday
                setTimeSlots(fridayTimeSlots);
                break;
            case 6: // Saturday
                setTimeSlots(saturdayTimeSlots);
                break;
            case 0: // Sunday
                setTimeSlots(sundayTimeSlots);
                break;
            default:
                setTimeSlots([]); // Trate caso não haja correspondência
        }
    };
    const handleTimeClick = (time: string) => {
        console.log("entrou")
        setSelectedTime(time);
    };
    const fetchDataEmployee = async () => {
        try {
            if (employeeId) {
                const response = await fetch(`https://sunx-api-agendamento.vercel.app/employees/${employeeId}`);
                const data = await response.json();

                setNameEmployee(data.name)
                setEmployee(data); // Adicione esta linha para definir o estado 'employee'
                setMondayTimeSlots(data.timeSlotsMonday);
                setTuesdayTimeSlots(data.timeSlotsTuesday);
                setWednesdayTimeSlots(data.timeSlotsWednesday);
                setThursdayTimeSlots(data.timeSlotsThursday);
                setFridayTimeSlots(data.timeSlotsFriday);
                setSaturdayTimeSlots(data.timeSlotsSaturday);
                setSundayTimeSlots(data.timeSlotsSunday);
            }
        } catch (error) {
            console.error("Erro ao buscar o funcionário:", error);
        }
    };
    useEffect(() => {

        fetchDataEmployee();
    }, [employeeId]);

    useEffect(() => {
        fetch("https://sunx-api-agendamento.vercel.app/services")
            .then((response) => response.json())
            .then((data) => {
                setServices(data);
            })
            .catch((error) => console.error("Erro ao buscar serviços:", error));
    }, []);

    useEffect(() => {

        // Você pode mover a lógica do useEffect para uma função assíncrona para torná-la mais legível.
        const fetchSchedulesIsDate = async () => {
            const schedulesByDate: { [key: string]: Schedule[] } = {};
            const newDates = []; // Crie um novo array para armazenar as datas

            for (let i = 0; i < 7; i++) {
                const date = addDays(today, i);

                newDates.push(date); // Adicione as datas ao novo array
            }
            setDates(newDates); // Atualize o estado 'dates' com as datas
        };

        fetchSchedulesIsDate();
    }, [today]);

    const handleServiceSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedServices(selectedOptions);
    };

    const dayFieldMapping: Record<number, keyof Employee> = {
        1: "timeSlotsMonday",
        2: "timeSlotsTuesday",
        3: "timeSlotsWednesday",
        4: "timeSlotsThursday",
        5: "timeSlotsFriday",
        6: "timeSlotsSaturday",
        0: "timeSlotsSunday",
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("handleSubmit called");
        if (selectedDate && employee) {

            // Converta a data para o formato Date
            const parsedDate = new Date(selectedDate);

            // Obtenha o dia da semana (0 para domingo, 1 para segunda, ...)
            const dayOfWeek = parsedDate.getDay();
            console.log("dayOfWeek: ", dayOfWeek);

            let selectedDayField: keyof Employee | undefined = dayFieldMapping[dayOfWeek];
            if (typeof selectedDayField === 'undefined') {
                console.error('Erro ao determinar selectedDayField. Dia:', dayOfWeek, 'Mapping:', dayFieldMapping);
                throw new Error('Erro ao determinar selectedDayField');
            }

            const dadosAtualizados: Record<string, any> = {
                [selectedDayField]: (employee[selectedDayField] as TimeSlot[]).map((intervaloTempo) =>
                    intervaloTempo.time === selectedTime ? { ...intervaloTempo, active: false } : intervaloTempo
                ),
            };

            await fetch(`https://sunx-api-agendamento.vercel.app/employees/${employeeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    $set: dadosAtualizados,
                }),
            });

            try {
                const requestBody = {
                    nameClient,
                    nameEmployee,
                    email,
                    phone,
                    price,
                    time: selectedTime,
                    dateAndTime: format(selectedDate, "yyyy-MM-dd"),
                    service: selectedServices.join(","),
                    active: true
                };

                const response = await fetch('https://sunx-api-agendamento.vercel.app/schedules/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                if (response.ok) {
                    const data = await response.json();

                    // Limpe os campos do formulário
                    setNameClient("")
                    setNameEmployee("")
                    setEmail("")
                    setPhone("")
                    setPrice("")
                    setTime("")
                    setSelectedServices([]);
                    fetchDataEmployee()
                    setTimeVisible(false)
                    toast.success("O agendamento foi adicionado!");
                } else {
                    console.error('Erro ao criar o agendamento:', response.statusText);
                    toast.error("Erro ao adicionar o agendamento!");
                }
            } catch (error) {
                console.error('Erro de rede:', error);
                toast.error("Erro de rede ao adicionar o agendamento!");
            }
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <section className="z-10 h-[90vh] sm:h-auto  overflow-y-auto w-[90%] lg:w-[50%] rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 mx-auto bg-white shadow-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                            Criando Agendamento
                        </h2>
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="w-10 h-10 font-semibold leading-5 flex justify-center items-center text-white transition-colors duration-300 rounded-xl transform bg-red-700 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                            >
                                X
                            </button>
                        </div>
                    </div>

                    <form className="flex-col" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" htmlFor="name">
                                    Nome do Cliente
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={nameClient}
                                    onChange={(e) => setNameClient(e.target.value)}
                                    className="block w-full rounded-md py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                >
                                    Preço
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">R$:</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="block w-full rounded-md  py-1.5 pl-9 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                >
                                    Email do cliente
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md  py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
                                />
                            </div>
                            <div>
                                <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                >
                                    Número do cliente
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="block w-full rounded-md  py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
                                />
                            </div>
                            <div>
                                <p>Segure <span className="font-bold">CTRL</span> para selecionar mais de um Serviço.</p>
                                <label
                                    className="text-gray-700 mb-[5rem] dark:text-gray-200"
                                    htmlFor="services"
                                >
                                    Serviços
                                </label>
                                <select
                                    id="services"
                                    className="block w-full rounded-md  py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
                                    multiple
                                    onChange={handleServiceSelection}
                                    value={selectedServices}
                                    required
                                >
                                    {services.map((service) => (
                                        <option key={service._id} value={service.name} className='hover:bg-blue-400'>
                                            {service.name}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        {isDatesVisible && (
                            <>
                                <div className="flex overflow-auto mt-5 w-full md:w-full lg:w-full">
                                    {dates.map((date, index) => (
                                        <DateCardAdmin
                                            key={index}
                                            date={date}
                                            selected={date === selectedDate}
                                            onClick={() => handleDateClick(date)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {isTimeVisible && (
                            <>
                                {selectedDate && (
                                    <>
                                        <div className="w-full flex justify-center">
                                            <div className="grid grid-cols-4 md:gap-x-10 lg:w-[50%] w-[65vw]">
                                                {timeSlots
                                                    .filter((timeSlot) => timeSlot.active)
                                                    .map((timeSlot, index) => (
                                                        <TimeSlotCardAdmin
                                                            key={index}
                                                            time={timeSlot.time}
                                                            active={timeSlot.active}
                                                            selectedTime={selectedTime}
                                                            handleTimeClick={handleTimeClick}
                                                        />
                                                    ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-end mt-6">
                                            <button
                                                className="px-8 py-2.5 font-semibold leading-5 rounded-xl text-white transition-colors duration-300 transform bg-green-700 hover-bg-green-600 focus:outline-none focus-bg-green-600">
                                                Adicionar
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        )}

                    </form>
                </section>
            </div>
        </>
    );
};

export default FormScheduleCreate;