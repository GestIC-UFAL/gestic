import * as React from 'react';
import { Box, Heading, Text, IconButton, Center, Table, Thead, Tr, Th, Tbody, Td, Link } from '@chakra-ui/react';
import { MdModeEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { BsTrashFill } from 'react-icons/bs';
import { useAuth } from '../../../providers/AuthProvider';
import { PropsOfferItem } from '../types';


const OfferItem: React.FC<PropsOfferItem> = ({ offer, clickToRemove = () => {}, withActions = true }) => {
  const { user } = useAuth();
  const history = useHistory();

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
        <Text fontSize="18px" display="flex" alignItems="center" justifyContent="center">
          <b>Horários</b>
        </Text>
        {offer.timetables.length !== 0 ? (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Dia</Th>
                <Th>Início</Th>
                <Th>Fim</Th>
              </Tr>
            </Thead>
            <Tbody>
              {offer.timetables.map(timetable => {
                return (
                  <Link key={timetable.id} as={Tr} href={`ofertas-disciplinas/show/${timetable.id}`}>
                    <Td>
                      <Link display="block" href={`ofertas-disciplinas/show/${timetable.id}`}>
                        {timetable.weekday}
                      </Link>
                    </Td>
                    <Td>
                      <Link display="block" href={`ofertas-disciplinas/show/${timetable.id}`}>
                        {timetable.start_time}
                      </Link>
                    </Td>
                    <Td>
                      <Link display="block" href={`ofertas-disciplinas/show/${timetable.id}`}>
                        {timetable.end_time}
                      </Link>
                    </Td>
                  </Link>
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
