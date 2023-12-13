import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
    TruckIcon,
    SignalIcon,
    MapPinIcon,
    UserGroupIcon,
    CircleStackIcon
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'Torre de Controle',
      description: 'Sistema para gestão de transporte com uma Torre de controle para o acompanhamento completo de toda a operação.',
      icon: SignalIcon,
    },
    {
      name: 'Core Transporte',
      description: 'Modelo de negócio operacional junto aos motoristas autônomos.',
      icon: TruckIcon,
    },
    {
      name: 'Transporte 4.0',
      description: 'Integração sistêmica com todos os envolvidos com informações compartilhadas em tempo real.',
      icon: MapPinIcon,
    },
    {
      name: 'Gestão de risco',
      description: 'Cuidado com a saúde do motorista, recomendação da manutenção preventiva, seguro de vida, riscos trabalhistas e respeito às leis do motorista.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Supply',
      description: 'Time Operacional in loco com Knowhow para a gestão completa do  transporte junto ao cliente.',
      icon: UserGroupIcon,
    },
    {
      name: 'Banco de Dados',
      description: 'Motoristas selecionados e treinados à operação .',
      icon: CircleStackIcon,
    },
  ]
  
  export default function Features() {
    return (
      <div id='services' className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-indigo-600">
            Transformando a logística
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como fazemos isso?
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Através de nossa tecnologia e inteligência, com o uso de métricas e
            indicadores gerados por um sistema de Big Data, construímos a
            solução ideal para cada frete.
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-color-main-rappor p-3 shadow-lg">
                          <feature.icon
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  