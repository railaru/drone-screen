import { ApiService } from './api.service';
import ToyInterface from '../interfaces/toy.interface';
import { asyncData } from '../testing/async-observable-helpers';

let httpClientSpy: { get: jasmine.Spy };
let service: ApiService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new ApiService(httpClientSpy as any);
});

it('should return expected toys (HttpClient called once)', () => {

  const expectedToys: ToyInterface[] = [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      // tslint:disable-next-line:max-line-length
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ];

  httpClientSpy.get.and.returnValue(asyncData(expectedToys));

  service.fetchToys().subscribe(
    toys => expect(toys).toEqual(expectedToys, 'expected toys'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
