import { useState } from 'react';

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <>
      <div className="max-w-md w-full mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">
          Você foi convidado por um amigo e ganhou R$ 100,00
        </h1>
        <p className="text-gray-600 mb-4">
          Conclua a pesquisa e ganhe até R$ 850,00 em recompensas.
        </p>
        <p className="text-[#FF3B5C] mb-6">Restrito a uma participação por usuário.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#FF3B5C] text-white py-3 rounded-md font-medium hover:bg-[#ff2c4f] transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Ao participar das atividades de recompensa, você concorda com nossos{' '}
          <button 
            onClick={() => setShowTerms(true)}
            className="underline text-[#FF3B5C] hover:text-[#ff2c4f]"
          >
            Termos e Condições
          </button>
          .
        </p>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Termos e Condições</h2>
                <button 
                  onClick={() => setShowTerms(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="prose prose-sm space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Termos de Uso do Aplicativo</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">1. Aceitação dos Termos</h4>
                      <p>
                        Ao acessar e utilizar o aplicativo [Tiktok Recompensas], você concorda com os termos e condições estabelecidos neste documento. Se você não concorda com algum termo, por favor, não utilize nossos serviços.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold">2. Alterações no Termo de Uso</h4>
                      <p>
                        Nos reservamos o direito de modificar os Termos de Uso a qualquer momento, sendo que qualquer alteração será informada aos usuários por meio de notificação no aplicativo ou por e-mail.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold">3. Responsabilidade do Usuário</h4>
                      <p>
                        O usuário é responsável por manter seus dados de conta bancária atualizados, bem como por garantir que cumpre todas as condições para a realização do saque conforme os termos acima.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold">4. Política de Privacidade</h4>
                      <p>
                        A coleta e o tratamento de dados pessoais dos usuários serão feitos conforme nossa Política de Privacidade, disponível dentro do aplicativo e no site oficial.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold">5. Processo de Saque</h4>
                      <p>
                        Após o período de 6 meses, o saque poderá ser solicitado diretamente pelo aplicativo. O valor será transferido para a conta bancária registrada pelo usuário, em até 2 dias úteis após a solicitação.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold">6. Disposições Finais</h4>
                      <p>
                        Quaisquer dúvidas ou questionamentos sobre este Termo de Uso podem ser direcionados ao nosso suporte por meio dos canais disponíveis no aplicativo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowTerms(false)}
                  className="bg-[#FF3B5C] text-white px-6 py-2 rounded-md hover:bg-[#ff2c4f] transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}