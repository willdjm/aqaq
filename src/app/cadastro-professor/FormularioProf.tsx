import { JSX, useState, useEffect, useRef } from 'react';
import { FaRegUserCircle, FaCheck } from 'react-icons/fa';
import { GiExitDoor } from 'react-icons/gi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { ImBook } from 'react-icons/im';
import { MdDateRange } from 'react-icons/md';
import axios from 'axios';
import { FaHouseCircleCheck } from 'react-icons/fa6';

const steps = [
  { id: 'step1', title: 'Dados Pessoais', icon: <FaRegUserCircle /> },
  { id: 'step2', title: 'Dados escolares', icon: <ImBook /> },
  { id: 'step3', title: 'Endereço', icon: <FaHouseCircleCheck size={25} /> },
  { id: 'step4', title: 'Acesso', icon: <GiExitDoor size={30} /> },
];

export const FormularioProfessor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    number: ''
  });

  const numberRef = useRef<HTMLInputElement | null>(null); // Definir o tipo da referência

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const fetchAddress = async (cep: string) => {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data && !data.erro) {
        setAddress({
          street: data.logradouro || '',
          neighborhood: data.bairro || '',
          city: data.localidade || '',
          state: data.uf || '',
          number: ''  // Resetando o número
        });
        if (numberRef.current) {
          (numberRef.current as HTMLInputElement).focus();  // Type assertion para garantir que é um HTMLInputElement
        }
      } else {
        alert('CEP inválido.');
        setAddress({
          street: '',
          neighborhood: '',
          city: '',
          state: '',
          number: ''
        });
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
      alert('Erro ao buscar o CEP.');
    }
  };

  useEffect(() => {
    if (cep.length === 8) {
      fetchAddress(cep);
    }
  }, [cep]);

  const renderFields = (step: { id: unknown; title?: string; icon?: JSX.Element; }) => {
    switch (step.id) {
      case 'step1':
        return (
          <>
            {/* Nome */}
            <div className="flex w-full md:mb-7 mb-2">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <FaRegUserCircle />
              </div>
              <input
                type="text"
                placeholder="Nome"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              />
            </div>
            {/* CPF */}
            <div className="flex w-full md:mb-7 mb-2">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <HiOutlineIdentification size={20} />
              </div>
              <input
                type="text"
                placeholder="CPF"
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              />
            </div>
            {/* Sexo */}
            <div className='flex flex-col w-full md:mb-7 mb-2'>
              <label className='text-black mb-1'>Sexo</label>
              <select
                className="w-full py-2 px-3 rounded-lg bg-gray-300 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="" disabled selected>Selecione</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="other">Outro</option>
              </select>
            </div>
            {/* Data de Nascimento */}
            <div className='flex flex-col w-full md:mb-7 mb-2'>
              <label className='text-black mb-1'>Data de Nascimento</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 z-10 text-center pointer-events-none">
                  <MdDateRange />
                </div>
                <input
                  type="date"
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>
          </>
        );
      case 'step2':
        return (
          <>
            {/* Qual seu nível de formação? */}
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:mb-7 mb-2 text-gray-400'>
              <label className='text-black flex-shrink-0'>Qual seu nível de formação?</label>
              <select
                className="flex-grow py-2 px-3 rounded-lg bg-gray-300 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="" disabled selected>Selecione</option>
                <option value="graduado">Graduado/Licenciado</option>
                <option value="mestrado">Mestrado</option>
                <option value="doutorado">Doutorado</option>
                <option value="pos-doutorado">Pós-Doutorado</option>
              </select>
            </div>
            {/* Você está lecionando no momento? */}
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:mb-7 mb-2 text-gray-400'>
              <label htmlFor="currentlyTeachingYes" className="text-black flex-shrink-0">Você está lecionando no momento?</label>
              <div className='flex md:flex-row items-center gap-4'>
                <div className='flex items-center'>
                  <input
                    type="radio"
                    id="currentlyTeachingYes"
                    name="currentlyTeaching"  // 'name' faz com que apenas um rádio seja selecionado por vez
                    className="form-radio h-4 w-4 text-gray-400"
                  />
                  <label htmlFor="currentlyTeachingYes" className='text-gray-400 ml-2'>Sim</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type="radio"
                    id="currentlyTeachingNo"
                    name="currentlyTeaching"  // 'name' faz com que apenas um rádio seja selecionado por vez
                    className="form-radio h-4 w-4 text-gray-400"
                  />
                  <label htmlFor="currentlyTeachingNo" className='text-gray-400 ml-2'>Não</label>
                </div>
              </div>
            </div>
            {/* Nome da Escola */}
            <input
              type="text"
              placeholder="Nome da Escola"
              className="w-full md:mb-7 mb-2 pl-3 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
            />
            {/* CEP */}
            <input
              type="number"
              placeholder="CEP"
              className="w-full md:mb-7 mb-2 pl-3 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            {/* ENDEREÇO DA ESCOLA */}
            <div className="w-full flex flex-col md:flex-row md:space-x-4">
              {/* Nome da Escola */}
              <input
                type="text"
                placeholder="Endereço da Escola"
                value={address.street}
                className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              />
              {/* Número */}
              <input
                type="number"
                placeholder="Nº"
                value={address.number}
                onChange={(e) => setAddress({ ...address, number: e.target.value })}
                ref={numberRef}  // Associar a referência
                className="md:w-24 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row md:space-x-4">
              {/* Complemento */}
              <input
                type="text"
                placeholder="Complemento"
                className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              />
              {/* Bairro */}
              <input
                type="text"
                placeholder="Bairro"
                value={address.neighborhood}
                className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row md:space-x-4">
              {/* Cidade */}
              <input
                type="text"
                placeholder="Cidade"
                value={address.city}
                className="flex-1 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
              />
              {/* Estado */}
              <select
                className="md:w-1/3 pl-3 pr-3 py-2 mb-2 md:mb-7 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={address.state}
                onChange={(e) => setAddress({ ...address, state: e.target.value })}
              >
                <option value="" disabled>Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
            {/* ANO QUE INGRESSOU */}
            <div className="flex flex-col w-full md:mb-7 mb-2">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                <label className="text-black mb-2 md:mb-0 ">Ano de ingresso na escola</label>
                <input
                  type="text"
                  placeholder="aaaa"
                  className="w-full md:w-28 px-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
                />
              </div>
            </div>
          </>
        );
      case 'step3':
        return (
          <input
            type="text"
            placeholder="Escola"
            className="w-full pl-3 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
          />
        );
      case 'step4':
        return (
          <>
          <input
            type="password"
            placeholder="Senha atual"
            className="w-full md:mb-14 mb-2 pl-3 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
          />

          <input
          type="password"
          placeholder="Nova Senha"
          className="w-full md:mb-7 mb-2 pl-3 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
        />

        <input
        type="password"
        placeholder="Confirme a Nova Senha"
        className="w-full md:mb-7 mb-2 pl-3 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500"
      />
      </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 sm:p-8 lg:p-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-20">
      <div className="flex flex-wrap sm:flex-nowrap justify-between mb-6 border-b-2 border-green-900">
        {steps.map((step, index) => (
          <button
            key={step.id}
            className={`flex items-center px-4 py-2 space-x-2 ${
              index === currentStep
                ? 'text-green-900 font-bold text-base border-b-4 border-green-900'
                : 'bg-white text-gray-500 font-bold text-base'
            }`}
            onClick={() => setCurrentStep(index)}
          >
            <div className="text-lg sm:text-xl">{step.icon}</div>
            <span className="hidden sm:block">{step.title}</span>
          </button>
        ))}
      </div>

      <form id="multi-step-form" className='border border-gray-200 rounded-lg md:p-8 p-4 mt-10 relative'>
        <div className="absolute -top-4 md:left-20 left-8 font-semibold bg-white border border-gray-300 text-white rounded text-sm sm:text-base flex ">
        <button className="flex items-center bg-gray-200 rounded-md border border-gray-200">
          <div
            className="flex items-center justify-center rounded-l-md w-10 h-10 bg-gradient-to-b from-green-400 to-green-800 ">
            <FaCheck />
          </div>
          <span className="text-gray-800 font-medium px-3">Professor</span>
        </button>
        </div>

        <div className="step-content p-4 sm:p-6 lg:p-10">
          {renderFields(steps[currentStep])}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-4">
            {currentStep < steps.length - 1 && (
              <button
                type="button"
                className="next-btn bg-gradient-to-b from-amber-200 to-amber-500 text-black px-8 py-1.5 rounded w-full sm:w-auto"
                onClick={handleNext}
              >
                Próximo
              </button>
            )}
            {currentStep === steps.length - 1 && (
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto"
              >
                Enviar
              </button>
            )}
          </div>
        </div>
      </form>

      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="bg-gradient-to-t from-green-500 to-green-800 text-white px-6 py-1 rounded"
          // Adicione a lógica de salvar aqui
        >
          FINALIZAR
        </button>
      </div>
    </div>
  );
};
