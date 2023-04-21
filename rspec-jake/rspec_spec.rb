require 'rspec'
require_relative 'task.rb'

describe 'Task' do
  it 'when a task is instantiated' do
    expect{Task.new}.to_not raise_error
  end

  it 'has a title' do
    my_task = Task.new
    my_task.title = 'Wash the Car'
    expect(my_task.title).to be_a String 
    expect(my_task.title).to eq 'Wash the Car'
  end

  it 'has a description' do
    my_task = Task.new
    my_task.description = 'clean with soapy water, and vacuum'
    expect(my_task.description).to be_a String
    expect(my_task.description).to eq 'clean with soapy water, and vacuum'
  end

  it 'starts as in progress' do
    my_task = Task.new
    expect(my_task.progress).to eq 'in progress'
    expect(my_task.progress).to be_a String
  end

  it 'can be marked as done' do
  my_task = Task.new
  # expect(my_task.marked).to be_a String
  expect{my_task.marked 'marked done'}.to change {my_task.marked}.from('in progress').to('marked done')
  end
end