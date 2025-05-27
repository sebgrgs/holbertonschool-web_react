/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFZQSxDQUFDO0lBWEMsK0JBQVksR0FBWjtRQUNELE9BQU8sbUJBQW1CLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDRCxPQUFPLHdCQUF3QixDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDRCxPQUFPLDJCQUEyQixDQUFDO0lBQ2xDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNELE9BQU8sdUJBQXVCLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRCxPQUFPLHFCQUFxQixDQUFDO0lBQzVCLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRCxPQUFPLGlCQUFpQixDQUFDO0lBQ3hCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDakQsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ25CO1NBQU07UUFDUixPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRyZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XG4gIH1cblxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuXHRyZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG5cdHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gIH1cblxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG5cdHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcblx0cmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gIH0gZWxzZSB7XG5cdHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTtcblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=