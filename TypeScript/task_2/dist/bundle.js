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
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFZQSxDQUFDO0lBWEMsK0JBQVksR0FBWjtRQUNELE9BQU8sbUJBQW1CLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDRCxPQUFPLHdCQUF3QixDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDRCxPQUFPLDJCQUEyQixDQUFDO0lBQ2xDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNELE9BQU8sdUJBQXVCLENBQUM7SUFDOUIsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRCxPQUFPLHFCQUFxQixDQUFDO0lBQzVCLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRCxPQUFPLGlCQUFpQixDQUFDO0lBQ3hCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDakQsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ25CO1NBQU07UUFDUixPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDOUMsT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztBQUNoRSxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDL0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUNsQztTQUFNO1FBQ1IsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUNqQztBQUNILENBQUM7QUFJRCxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUN2QyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDMUIsT0FBTyxlQUFlLENBQUM7S0FDdkI7SUFDRCxPQUFPLGtCQUFrQixDQUFDO0FBQzNCLENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUssd0JBQXdCO0FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRyZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XG4gIH1cblxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuXHRyZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG5cdHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdHJldHVybiAnQ2Fubm90IGhhdmUgYSBicmVhayc7XG4gIH1cblxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG5cdHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcblx0cmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gIH0gZWxzZSB7XG5cdHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gIHJldHVybiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBzdHJpbmcge1xuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcblx0cmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG4gIH0gZWxzZSB7XG5cdHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG4gIH1cbn1cblxudHlwZSBTdWJqZWN0cyA9ICdNYXRoJyB8ICdIaXN0b3J5J1xuXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcblx0aWYgKHRvZGF5Q2xhc3MgPT09ICdNYXRoJykge1xuXHRcdHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XG5cdH1cblx0cmV0dXJuICdUZWFjaGluZyBIaXN0b3J5Jztcbn1cbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7ICAgICAvLyBPdXRwdXQ6IFRlYWNoaW5nIE1hdGhcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7IFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9