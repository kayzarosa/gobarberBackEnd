import { addDays } from 'date-fns';
import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentRepository: FakeAppointmentRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    const dateOne = addDays(new Date(), 1);

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        8,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        9,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        10,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        11,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        12,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        13,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        14,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        15,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        16,
        0,
        0,
      ),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateOne.getFullYear(),
        dateOne.getMonth(),
        dateOne.getDate(),
        17,
        0,
        0,
      ),
    });

    const dateTwo = addDays(new Date(), 2);

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: '2',
      date: new Date(
        dateTwo.getFullYear(),
        dateTwo.getMonth(),
        dateTwo.getDate(),
        8,
        0,
        0,
      ),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      month: dateOne.getMonth() + 1,
      year: 2020,
    });

    const nowDay = new Date();

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: nowDay.getDate(), available: true },
        { day: dateOne.getDate(), available: false },
        { day: dateTwo.getDate(), available: true },
        { day: addDays(new Date(), 3).getDate(), available: true },
      ]),
    );
  });
});
