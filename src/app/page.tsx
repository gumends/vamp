'use client';
import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { Avatar, Box, IconButton } from '@mui/joy';
import FullscreenIcon from '@mui/icons-material/Fullscreen';


export default function LayoutModalDialog() {
  const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>(
    undefined,
  );

  const [foto, setFoto] = React.useState('');

  const imagens = [
    {
      "nome": "https://www.otempo.com.br/adobe/dynamicmedia/deliver/dm-aid--9e53280b-9307-43f0-8ac9-300129025684/entretenimento-vampeta-posa-em-sessao-de-fotos-para-a-revista-g-magazine-em-1999-1708766567.jpg?quality=90&preferwebp=true&width=1200"
    },
    {
      "nome": "https://i.superesportes.com.br/_mNqaRdgVcZttj5yL6A62v7IZMU=/650x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2023/01/04/3985307/vampeta-ex-jogador-da-selecao-brasileira_1_79005.jpg"
    },
    {
      "nome": "https://i0.statig.com.br/bancodeimagens/ae/1g/8g/ae1g8gw1ijew1a8kauqebzdwd.jpg"
    },
    {
      "nome": "https://scontent.fcgh39-1.fna.fbcdn.net/v/t39.30808-6/267366049_106047351935631_6446716623247923080_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=mX8NanOGtIwQ7kNvgFwYoO2&_nc_ht=scontent.fcgh39-1.fna&oh=00_AYC0Vfq8bnUNfTlpU4YyCEvEVM3fy2BGnwXFIJ1KXT4OiA&oe=66DE6776"
    },
    {
      "nome": "https://jpimg.com.br/uploads/2022/04/vampeta-apontando.png"
    },
    {
      "nome": "https://media.gettyimages.com/id/1237691195/pt/foto/corinthians-player-vampeta-gets-into-his-car-11-january-2000-in-sao-paulo-el-jugador-vampeta.jpg?s=1024x1024&w=gi&k=20&c=UMmHn1HTnByP_FsVjilPNAcokFlASE7FoHojuJlTtXo="
    }
  ]

  return (
    <React.Fragment>
      <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {
          layout === 'fullscreen' ? null : imagens.map((imagem) => {
            return (
              <Box>
                <Box sx={{ position: 'relative' }}>
                  <img
                    src={imagem.nome}
                    alt="imagem"
                    style={{ width: '100%', objectFit: 'cover' }}
                  />
                  <IconButton onClick={() => { setLayout('fullscreen'); setFoto(imagem.nome) }} sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1, width: 40, height: 40 }}>
                    <FullscreenIcon />
                  </IconButton>
                </Box>
              </Box>
            )
          })
        }
      </Box>
      <Modal
        open={!!layout}
        onClose={() => {setLayout(undefined);}}
        sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img
          src={foto}
          alt="imagem"
          style={{ width: '70%', height: '100%', objectFit: 'cover' }}
        />
      </Modal>
    </React.Fragment>
  );
}
