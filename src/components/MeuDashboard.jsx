import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const MeuDashboard = () => {
  const [dados, setDados] = useState([]);
  const [total, setTotal] = useState(0);
  const [tipos, setTipos] = useState(0);
  const [media, setMedia] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/api/estatisticas')
      .then(res => {
        setDados(res.data.dados);
        setTotal(res.data.totais.totalDenuncias);
        setTipos(res.data.totais.tiposUnicos);
        setMedia(res.data.totais.mediaMensal);
      })
      .catch(err => console.error('Erro ao buscar dados:', err));
  }, []);

  return (
    <div className="p-6 grid gap-6">
      {/* Gráfico de Linha */}
      <Card>
        <CardHeader><CardTitle>Denúncias por Mês (Linha)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="valor" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Gráfico de Barras */}
      <Card>
        <CardHeader><CardTitle>Denúncias por Mês (Barra)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dados}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="valor" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Blocos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader><CardTitle>Total de Denúncias</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{total}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Tipos Únicos</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{tipos}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Média por Mês</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">{media}</p></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MeuDashboard;
