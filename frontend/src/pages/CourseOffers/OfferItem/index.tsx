import * as React from 'react';
import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Center,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { MdModeEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { BsTrashFill } from 'react-icons/bs';
import { useAuth } from '../../../providers/AuthProvider';
import { PropsOfferItem } from '../types';

import { api } from '../../../services/api';

const OfferItem: React.FC<PropsOfferItem> = ({
  offer,
  clickToRemove = () => {
    toast({
      title: 'Não Implementado',
      status: 'error',
      position: 'top-right',
      isClosable: true,
    });
  },
  withActions = true,
}) => {
  const { user } = useAuth();
  const history = useHistory();
  const toast = useToast();

  const onDeleteTimetable = async (id_timetable: string) => {
    try {
      await api.delete(`/timetable/${id_timetable}`);
      toast({
        title: 'Horário excluído',
        status: 'success',
        position: 'top-right',
        isClosable: true,
      });
      window.location.reload();
    } catch {
      toast({
        title: `Ocorreu um erro ao remover um horário na plataforma`,
        description: 'Tente novamente mais tarde',
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  return (
    <Box mt={4} mb={8}>
      <Box mb={3} display="flex" alignItems="center" justifyContent="space-between">
        <Center flexDirection="column">
          <Heading color="black" textAlign="center" mb={6}>
            {offer.name}
          </Heading>
        </Center>

        {user && withActions && (
          <Box>
            <IconButton
              variant="outline"
              colorScheme="blue"
              aria-label="Editar"
              mr={2}
              icon={<MdModeEdit />}
              onClick={() => history.push(`/ofertas-disciplinas/edit/${offer.id}`)}
            />
            <IconButton
              variant="outline"
              colorScheme="red"
              aria-label="Remover"
              onClick={clickToRemove}
              icon={<BsTrashFill />}
            />
          </Box>
        )}
      </Box>

      <Box mt={2} textAlign="left">
        <Text fontSize="18px">
          <b>Código da disciplina: </b>
          {offer.code}
        </Text>
      </Box>

      <Box mt={3} textAlign="left">
        <Text fontSize="18px">
          <b>Código classroom: </b>
          {offer.codeClassroom}
        </Text>
      </Box>

      <Box mt={3} textAlign="left">
        <Text fontSize="18px">
          <b>Link classroom: </b>
          {offer.linkClassroom}
        </Text>
      </Box>

      <Box mt={3} textAlign="left">
        <Text fontSize="18px">
          <b>Link whatsapp </b>
          {offer.linkWpp}
        </Text>
      </Box>

      <Box mt={3} textAlign="left">
        <Text fontSize="18px">
          <b>Link telegram: </b>
          {offer.linkTel}
        </Text>
      </Box>

      <Box mt={3} textAlign="left">
        <Text fontSize="18px">
          <b>Link meet: </b>
          {offer.linkMeets}
        </Text>
      </Box>

      <Box mt={3} textAlign="left">
        <Text fontSize="18px" display="flex" alignItems="center" justifyContent="space-between">
          <b>Horários</b>
          {user && (
            <Button
              leftIcon={<AddIcon />}
              onClick={() => history.push(`/ofertas-disciplinas/show/${offer.id}/timetable-new`)}
              colorScheme="teal"
              variant="outline"
            >
              Adicionar
            </Button>
          )}
        </Text>
        {offer.timetables.length !== 0 ? (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Dia</Th>
                <Th>Início</Th>
                <Th>Fim</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {offer.timetables.map(timetable => {
                return (
                  <Tr key={timetable.id}>
                    <Td>{timetable.weekday}</Td>
                    <Td>{timetable.start_time}</Td>
                    <Td>{timetable.end_time}</Td>
                    <Td>
                      {user && withActions && (
                        <Box>
                          <IconButton
                            variant="outline"
                            colorScheme="blue"
                            aria-label="Editar"
                            mr={2}
                            icon={<MdModeEdit />}
                            onClick={() =>
                              history.push(`/ofertas-disciplinas/show/${offer.id}/timetable-edit/${timetable.id}`)
                            }
                          />
                          <IconButton
                            variant="outline"
                            colorScheme="red"
                            aria-label="Remover"
                            onClick={() => onDeleteTimetable(timetable.id)}
                            icon={<BsTrashFill />}
                          />
                        </Box>
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        ) : (
          <Text display="flex" alignItems="center" justifyContent="center">
            Não existem horários cadastrados
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default OfferItem;
